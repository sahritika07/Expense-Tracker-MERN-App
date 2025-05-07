const User = require("../models/User.js");
const Income = require("../models/Income.js")

exports.addIncome = async(req,res)=> {
    const userId = req.user.id;
    try {
        const {icon,source,amount,date} = req.body;
        if(!source || !amount || !date){
            return res.status(400).json({message: "All fields are required"});
        }
        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        })

        await newIncome.save();
        res.status(200).json(newIncome);
    } catch (error) {
        console.error("Add Income Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

exports.getAllIncome = async(req,res)=> {}

exports.deleteIncome = async(req,res)=> {}

exports.downloadIncomeExcel = async(req,res)=> {}
