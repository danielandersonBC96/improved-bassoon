import express from "express";
import Transaction from "../Models/KPI.js";

const routerTransaction = express.Router();

routerTransaction.get("/kpis", async (req, res) => {
  try {
    const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 })
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerTransaction;