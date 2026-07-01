const express = require('express');

const router = express.Router();


/**
 * @route POST /api/auth/regiser 
 * @description to register the user with username, email, password
 * @access Public
 */
router.post("/register");


/**
 * @route POST /api/auth/login 
 * @description to login the user with email, password
 * @access Public
 */
router.post("/login");


/**
 * @route POST /api/auth/get-me 
 * @description to register the user with username, email, password
 * @access prive
 */
router.get("/get-me");




module.exports = router