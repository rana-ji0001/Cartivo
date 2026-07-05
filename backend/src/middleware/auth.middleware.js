const blacklistmodel = require("../models/blacklistToken.model");
const userModel = require("../models/user.model");


const jwt = require("jsonwebtoken");


async function authUser(req,res,next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({message:"token is required for this"});
    }
    const isTokenBlacklisted = await blacklistmodel.findOne({token});
    if(isTokenBlacklisted){
        return res.status(409).json({
            message:"token is invalid",
        });
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(400).json({
            message:error.message
        });
    }
    
}
module.exports = {authUser}