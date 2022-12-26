const validateUserAuth = (req, res, next) => {
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

const validateAdminRequest = (req, res, next) => {
    if(!req.body.userId ){
        return res.status(400).json({
            data: {},
            success: false,
            message: "something went wrong",
            err: "user-id missing in the request"
        });
    }
    next();
};

module.exports = {
    validateUserAuth,
    validateAdminRequest
}