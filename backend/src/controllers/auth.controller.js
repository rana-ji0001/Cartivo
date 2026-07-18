const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");
const blacklistedModel = require("../models/blacklistToken.model");

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

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hash = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password: hash,
            otp,
            otpExpires: Date.now() + 5 * 60 * 1000,//these are 5 minutes
            verified: false
        });

        const msg = `
        <h2>Welcome to Cartivo ${username}</h2>
            <p>Here is your OTP for verification ${otp}</p>
            <p>Thanx For Coming On Cartivo</p>`
        await sendEmail(email, `Hello ${username} , We welcome you on Cartivo, You can Verify Your Email`, msg)
        return res.status(201).json({
            message: "Registeration Successfully, Please Verify Your Email",
        });

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
        if (!user.verified) {
            return res.status(403).json({
                message: "Please verify your email first."
            });
        }
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
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                }
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
async function getMeController(req, res) {
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
/**
 * @route Get /api/auth/logout
 * @description clear token from the cookie and add the token to the blacklist
 * @access Public
 */

async function logoutUserController(req, res) {
    const token = req.cookies.token;
    if (token) {
        await blacklistedModel.create({ token });
    }
    res.clearCookie("token");
    res.status(200).json({ message: "User Logout Successfully" })

}

/**
 * @route POST /api/auth/verify-email
 * @description  to verify the email otp
 * @access public
 */
async function verifyEmailController(req, res) {
    const { otp, email } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        if (user.otp !== otp) {
            return res.status(400).json({
                message: "Wrong Otp"
            });
        }
        if (user.otpExpires < Date.now()) {
            user.otp = null;
            user.otpExpires = null;
            await user.save();
            return res.status(400).json({
                message: "OTP expired"
            });
        }
        user.verified = true;
        user.otp = null;
        user.otpExpires = null;
        await user.save();


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
        return res.status(200).json({
            message: "Email verified successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }



}


module.exports = { registerUserController, loginUserController, getUsers, verifyEmailController, logoutUserController, getMeController }