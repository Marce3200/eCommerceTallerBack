const express = require("express");
const router = express.Router();

const { newProduct, findAll, findOne, update, deleteProduct} = require("../controllers/product.controller");

router.get("/all", findAll);
router.get("/item/:id", findOne)
router.post("/addProduct", newProduct);
router.put("/update/:id", update)
router.delete("/delete/:id", deleteProduct)


module.exports = router;