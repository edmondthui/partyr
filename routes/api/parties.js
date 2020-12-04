const express = require("express");
const Party = require("../../models/Party");
const router = express.Router(); //get router object off of the router
const validatePartyInput = require("../../validation/party")
const passport = require("passport");

//router.get("/test", (req, res) => res.json({ msg: "This is the parties route" }));

function shuffle(parties) {
    for (let i = 0; i < parties.length - 1; i++) {
        const j = Math.floor(Math.random() * (i));
        [parties[i], parties[j]] = [parties[j], parties[i]];
    }
    return parties;
}

router.get("/parties", (req, res) => {
    Party.find()
        .then(parties => res.json(shuffle(parties)))
        .catch(err => res.status(404).json({ nopartiesfound: "No parties found"}))
});

router.get("/party/:id", (req, res) => {
    Party.findById(req.params.id)
        .then(party => res.json(party))
        .catch(err => res.status(404).json({nopartyfound: "No party found"}))
});

router.put("/party/:id", (req, res) => {
  Party.findByIdAndUpdate(req.params.id, {...req.body}, {new: true},
    (err, result) => {
      if (err) {
        res.status(404).json({ updatepartyfailed: "Update party failed"});
      } else {
        const updateParty = {...req.body};
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

      const randColor = (Math.floor(Math.random()*16777216)).toString(16).padStart(0, 6)
      const newParty = new Party({
        host: req.body.host,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        lat: req.body.lat,
        lng: req.body.lng,
        items: req.body.items,
        color: '#' + randColor
      });
  
      newParty.save().then(Party => res.json(Party));
    }
  );


module.exports = router; 