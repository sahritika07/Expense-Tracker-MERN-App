const jwt = require("jsonwebtoken");
const User = require("../models/User")

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1h"})
};

exports.registerUser = async (req, res) => {};

exports.loginUser = async(req,res)=>{};

exports.getUserInfo = async(req,res)=>{};