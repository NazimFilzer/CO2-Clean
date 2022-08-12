const { Router, application } = require("express");
const router = Router();
const Emission = require("../models/Emission")


router.get("/history/:userId", async (req, res) => {

    const userId = req.params.userId
    try {
        const data = await Emission.find({ userId })
        res.render("history", { data })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;
