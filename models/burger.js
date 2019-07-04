/***********************
 * Model for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Burgers;
}