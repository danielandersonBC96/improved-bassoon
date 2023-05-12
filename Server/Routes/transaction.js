import express from "express";
import Transaction from "../Models/KPI.js";

const routerTransaction = express.Router();

routerTransaction.get("/kpis", async (req, res) => {
  try {
    const kpis = await Transaction.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerTransaction;