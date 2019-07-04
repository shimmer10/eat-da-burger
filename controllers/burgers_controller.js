/***********************
 * Controller for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (result) {
      var hbsObject = {
        burgers: result
      };
      console.log("object: " + JSON.stringify(hbsObject));
      res.render("index", hbsObject);
    });
  });


  app.post("/api/burgers", function (req, res) {
    var burger = req.body;

    db.Burgers.create({
      burger_name: burger.burger_name
    }).then(function (result) {
      res.redirect('back');
    });
  });

  app.put("/api/burgers/:id", function (req, res) {
    updateBurger = req.body;

    db.Burgers.update({
      devoured: updateBurger.devoured
    },
      {
        where: {
          id: req.params.id
        }
      },
      {
        fields: ['burger_name']
      }).then(function (result) {
        res.json(result);
      })
  });

  app.delete("/api/burgers/:id", function (req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    })
  });
}