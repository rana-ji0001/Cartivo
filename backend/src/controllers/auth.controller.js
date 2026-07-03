const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");

/**
 * @route POST /api/auth/register
 * @description registerUserController is used to register the user with username, email, password
 * @access Public
 */
async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Enter all the credentials!" })

    }

    try {
        const isUserAlreadyExists = await userModel.findOne({
            $or: [{ username }, { email }]
        });
        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "user alreadt exists with these credentials" });
        }
        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hash
        });
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1D" }
        )
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        });
        if (user) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const msg = `Welcome to Cartivo ${username}
            here is your OTP for verification ${otp}
            Thanx For Coming On Cartivo`
            await sendEmail(email, `Hello ${username} , We welcome you on Cartivo, Here is your OTP:- `, msg)
            res.status(201).json({
                message: "User Registered Successfully",
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role

                }
            })
        } else {
            return res.status(400).json({ message: "Invalid User Details" });
        }
        //TODOS OTP sending and verification and email verification
        //TODOS welcome mail
    } catch (error) {
        console.log(error || "server error")
    }
}




/**
 * @route POST /api/auth/login
 * @description loginUserController is used to login the user with email and password
 * @access Public
 */

async function loginUserController(req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: "1D" }
            );
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,      // true if using HTTPS
                sameSite: "lax",    // or "none" if frontend/backend are on different origins with HTTPS
                maxAge: 24 * 60 * 60 * 1000
            });

            return res.status(200).json({
                message: "User Logged In Successfully",
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            });
        } else {
            return res.status(400).json({
                message: "Invalid email or Password"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `${error}` || "server error" })

    }


}
/**
 * @route POST /api/auth/users
 * @description  
 * @access private
 */

async function getUsers(req, res) {
    try {
        const users = await userModel.find({}).select('-password');
        return res.status(200).json(users);
    } catch (err) {
        return res.status(400).json({ message: "server error" });
    }

}

/**
 * @route POST /api/auth/get-me
 * @description  to get the user details
 * @access private
 */
async function getMe(req, res) {
    const user = await userModel.findById(req.user.id);
    res.status(200).json({
        message: "User Details Fetched Successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,

        }
    })

}


module.exports = { registerUserController, loginUserController, getUsers }