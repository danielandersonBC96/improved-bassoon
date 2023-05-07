import express from "express";
import Product from '../Models/Product.js'

const routerProduct = express.Router();

routerProduct.get("/products", async (req, res) => {
  try {
    const  product  = await Product.find();
    res.status(200).json( product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerProduct;