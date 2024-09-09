import express from "express";
export const router = express.Router();
import {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);
