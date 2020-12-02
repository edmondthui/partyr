const express = require("express");
const Item = require("../../models/Item");
const router = express.Router(); //get router object off of the router
const validateItemInput = require("../../validation/item")
const passport = require("passport");

//router.get("/test", (req, res) => res.json({ msg: "This is the parties route" }));
router.get("/items", (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ notitemsfound: "No items found"}))
});

router.post('/item',
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
      const { errors, isValid } = validateItemInput(req.body); 
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const newItem = new Item({
        name: req.body.name
      });
  
      newItem.save().then(Party => res.json(Party));
    }
  );


module.exports = router; 