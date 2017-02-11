var express = require("express");

var router = express.Router();

// IMPORT THE MODEL (burger.js) TO USE IT'S DATABASE FUNCTIONS.
var db = require("../models");

// ROUTES
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req,res) {
    db.Burger.findAll({
    })
    .then(function(dbBurger){res.render("index", {
        burgers: dbBurger
        });
    });
});

router.post("/burgers/create", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(dbBurger){
        res.redirect("/burgers");
    })
});


router.put("/burgers/update/:id", function(req, res) {
    db.Burger.update(req.body,
    {
        where: {
            id: req.params.id
        }
    })
    .then(function(dbBurger){
        res.redirect("/burgers");
    })
});

// EXPORT ROUTES FOR server.js TO USE.
module.exports = router;