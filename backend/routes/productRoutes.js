const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");


// GET all products
router.get("/", getProducts);
// GET single product
router.get("/:id", getProductById);

module.exports = router;