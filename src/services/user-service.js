const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRepository = require("../repository/user-repository");
const { JWT_KEY } = require("../config/serverConfig");

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }

    async createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: "1h"});
            return result;
        } catch (error) {
            console.log("something went wrong in token creation");
            throw { error };
        }
    }

    async verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token verification", error);
            throw { error };
        }
    }

    async checkPassword(userInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("something went wrong in password verification");
            throw { error };
        }
    }
}

module.exports = UserService;