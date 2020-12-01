const express = require("express");
const Party = require("../../models/Party");
const router = express.Router(); //get router object off of the router
const validatePartyInput = require("../../validation/party")
const passport = require("passport");

//router.get("/test", (req, res) => res.json({ msg: "This is the parties route" }));

router.get("/parties", (req, res) => {
    Party.find()
        .sort({date: -1})
        .then(parties => res.json(parties))
        .catch(err => res.status(404).json({ notpartiesfound: "No parties found"}))
});

router.get("/party/:id", (req, res) => {
    Party.findById(req.params.id)
        .then(party => res.json(party))
        .catch(err => res.status(404).json({nopartyfound: "No Party Found"}))
});

router.put("/party/:id", (req, res) => {
  Party.findByIdAndUpdate(
    req.params.id,
    { $set: req.body.title, description: req.body.description, date: req.body.date, guests: req.body.guests },
    { new: true }, //try this -ray
    function (err, result) {
      if (err) {
        res.status(404).json(err);
      } else {
        const updateParty = {
          title: req.body.title,
          description: req.body.description,
          host: req.body.hostId,
          date: req.body.date,
          guests: req.body.guest
        };
        res.json(updateParty);
      }
    }
  );
});


router.delete("/party/:id", (req, res) => {
  Party.findByIdAndRemove(req.params.id,
    function (err, result) {
      if (err) {
        res.status(404).json(err);
      } else {
        res.json(result);
      }
    }
  );
});


router.post('/party',
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
      const { errors, isValid } = validatePartyInput(req.body); 
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const newParty = new Party({
        title: req.body.title,
        description: req.body.description,
        host: req.body.host.id
      });
  
      newParty.save().then(Party => res.json(Party));
    }
  );


module.exports = router; 