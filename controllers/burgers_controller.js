/***********************
 * Controller for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});







module.exports = router;