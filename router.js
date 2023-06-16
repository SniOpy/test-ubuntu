const express = require("express");
const router = express.Router();


//! Mes routes paramétrées
router.get("/", (req,res,next) => {
    res.render("index");
})

router.get("/reservations", (req,res) => {
    res.render("reservations");
})



module.exports = router;
