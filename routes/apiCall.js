const { Router, application } = require("express");
const router = Router();
const fetch = require("node-fetch");
require("dotenv").config();
const { requireAuth, checkUser } = require("../middleware/authMiddleware")
const mongoose = require("mongoose");
const Emission = require("../models/Emission")
// const ObjectId = require("mongodb").ObjectId


// const { generatePdf } = require("../controller/genaratePdf");


router.get("/calculate", requireAuth, (req, res) => {

    //Passing id to get History
    const userD = res.userInfo._id
    const userId = { value: userD }

    res.render("calculate", { userId })
})


router.post("/calculate", checkUser, async (req, res) => {
    const query = req.body.material;
    const amount = req.body.weight;
    const unitType = req.body.unit;

    try {
        const url = "https://beta3.api.climatiq.io/search?query=" + query;
        console.log(url);


        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + process.env.API_KEY,
            },

        });
        const data = await response.json();
        const output = data.results[1]
        // console.log(output);


        const emissionValue = output.factor * amount;
        co2Value = { value: emissionValue }
        console.log(co2Value);
        const name = output.name;

        const saveing = new Emission({
            userId: res.userInfo._id,
            material: name,
            co2: emissionValue
        })
        saveing.save().then(console.log("doc Saved"))

        //Passing id to get History
        const userD = res.userInfo._id
        const userId = { value: userD }


        res.render("calculate", { output, co2Value, userId })

    } catch (error) {
        console.log(error);
    }

})




module.exports = router;
