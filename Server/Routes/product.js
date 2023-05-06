import express from "express";
import Products from '../Models/Product'

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const kpis = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;