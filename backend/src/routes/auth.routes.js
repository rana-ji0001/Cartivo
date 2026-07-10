const express = require('express');

const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {admin} = require("../middleware/adminMiddleware");


/**
 * @route POST /api/auth/regiser 
 * @description to register the user with username, email, password
 * @access Public
 */
router.post("/register",authController.registerUserController);


/**
 * @route POST /api/auth/login 
 * @description to login the user with email, password
 * @access Public
 */
router.post("/login",authController.loginUserController);


/**
 * @route POST /api/auth/users
 * @description to register the user with username, email, password
 * @access private
 */
router.get("/users",authMiddleware.authUser,admin,authController.getUsers);

/**
 * @route Get /api/auth/get-me
 * @description to get the info of the user
 * @access Private
 */
router.get("/get-me",authMiddleware.authUser, authController.getMeController);

/**
 * @route Get /api/auth/verify-email
 * @description to verify the user otp with the email otp
 * @access Public
 */
router.post("/verify-email", authController.verifyEmailController);

/**
 * @route Get /api/auth/logout
 * @description clear token from the cookie and add the token to the blacklist
 * @access Public
 */

router.get('/logout',authController.logoutUserController);





module.exports = router