const validateUserAuth = (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data: {},
            success: false,
            message: "something went wrong",
            err: "email or password missing in the req body"
        });
    }
    next();
};

module.exports = {
    validateUserAuth
}