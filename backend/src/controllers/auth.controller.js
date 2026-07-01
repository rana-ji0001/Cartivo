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
        const isUserAlreadyExists = await userModel.find({
            $or: [{ username }, { email }]
        });
        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "user alreadt exists with these credentials" });
        }
        const hash = await bcrypt.hash(password,10);

        const user = await userModel.create({
            username,
            email,
            password:hash,
            role 
        });
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1D" }
        )
        if(user){
            const otp = Math.floor(100000 + Math.random()*900000).toString();
            const msg = `Welcome to AliBaBa ${username}
            here is your OTP for verification ${otp}
            Thanx For Coming On AliBaBa`
            await sendEmail(email, `Welcome to AliBaBa - Your OTP for registration`,msg)
            res.status(201).json({
                message:"User Registered Successfully",
                user:{
                    _id:user._id,
                    username:user.username,
                    email:user.email,
                    role:user.role

                }
            })
        }else{
            return res.status(400).json({message:"Invalid User Details"});
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
/**
 * @route POST /api/auth/get-me
 * @description getMeController is used to get the user details 
 * @access private
 */