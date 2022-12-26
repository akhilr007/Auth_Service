const express = require("express");

const UserController = require("../../controllers/user-controller");
const { AuthRequestValidator } = require("../../middlewares");


const router = express.Router();

router.post("/signup", AuthRequestValidator.validateUserAuth, UserController.create);
router.post("/signin", AuthRequestValidator.validateUserAuth, UserController.signIn);

router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", AuthRequestValidator.validateAdminRequest, UserController.isAdmin);

module.exports = router;