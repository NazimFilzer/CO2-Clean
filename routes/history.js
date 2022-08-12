const { Router, application } = require("express");
const router = Router();
const Emission = require("../models/Emission")
const { requireAuth, checkUser } = require("../middleware/authMiddleware")

// const { generatePdf } = require("../controllers/genaratePdf");



router.get("/history/:userId", requireAuth, async (req, res) => {

    const userId = req.params.userId
    try {
        const data = await Emission.find({ userId })
        res.render("history", { data })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;
