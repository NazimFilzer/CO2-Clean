const { Router, application } = require("express");
const router = Router();
const fetch = require("node-fetch");
require("dotenv").config();
// const mongoose = require("mongoose");
// const Emission = require("../models/emission")
// const { generatePdf } = require("../controller/genaratePdf");



router.get("/calculate",(req,res)=>{
    res.render("calculate")
})


router.post("/calculate",(req,res)=>{
    
})




module.exports = router;
