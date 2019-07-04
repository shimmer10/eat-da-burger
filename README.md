# Eat-Da-Burger

## **Eat-Da-Burger is an app that allows people to add a burger and devour it**
## **This app displays the use of MySQL, Node, Express, Handlebars and ORM**

## **Link to Heroku deployed site: https://ancient-caverns-49639.herokuapp.com/**
### **The user begins by creating a burger**
     * The user will enter the name of the burger into the text box
     * The user clicks "Create Burger!" after entering the name
     * A create/post is then sent using sequelize/ajax to add the burger to the database
     * The page reloads and the burger they created is moved into the 'Burgers Available to Eat' area
### **The user can then devour the burger**
     * Burgers in the 'Burgers Available to Eat' section have a 'Devour it!' button next to them
     * If the button is clicked, the id for that burger is used to change the value of 'devoured' from false to true
     * An update is then sent using sequelize/ajax to update the burger in the datavase to have a true value for devoured
     * The page reloads and the burger they ate is moved to the 'Eaten Burgers' area
### **The user can then delete the burger**
     * Burgers in the 'Eaten Burgers' section have a 'DELETE!' button next to them
     * If the 'DELETE!' button is clicked, the id for that burger is used to delete the burger from the database
     * A delete/destroy is then sent using sequelize/ajax to delete the burger from the database
     * The page reloads and the burger is no longer available
