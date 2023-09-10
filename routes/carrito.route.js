const express = require("express");
const router = express.Router();


const { addItem, remove, listCarrito} = require("../controllers/carrito.controller");

router.post("/addItem", addItem);
router.post("/removeItem", remove);
router.get("/list", listCarrito);



module.exports = router;