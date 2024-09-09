import { Product } from "../models/product.model.js";

//get all produts from database
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//search for a product by id in the database
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//save data wearing model Product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//update product by id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    //Here we check if the product was save in the database
    const updateProduct = await Product.findById(id);

    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//delete product from database by id
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({ msg: "Product delete sucessfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
