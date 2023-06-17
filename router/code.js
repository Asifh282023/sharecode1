const express = require("express");
const {addCode} = require("../controller/functions");
const {getCode} =require("../controller/functions");
const {delete_code} =require("../controller/functions");


const router = express.Router();

router.post("/create",addCode);
router.get("/code",getCode);
router.delete("/delete/:title",delete_code);

module.exports=router;


