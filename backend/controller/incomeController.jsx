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

exports.getAllIncome = async(req,res)=> {
    const userId = req.user.id;
    try {
        const income = await Income.find({userId}).sort({date: -1});
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    } 
}

exports.deleteIncome = async (req, res) => {
    try {
        const deletedIncome = await Income.findByIdAndDelete(req.params.id);

        if (!deletedIncome) {
            return res.status(404).json({ message: "Income record not found" });
        }

        res.json({ message: "Income deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.downloadIncomeExcel = async(req,res)=> {}
