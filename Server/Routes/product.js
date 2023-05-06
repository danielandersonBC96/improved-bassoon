import express from "express";
import Products from '../Models/Product'

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const  product  = await Products.find();
    res.status(200).json( product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;