const express = require("express");
const bcrypt = require('bcryptjs'); 
const router = express.Router();
const User = require('../../models/User');
const passport = require("passport");
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.body.username,
    email: req.user.email
  });
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    console.log(req.body)
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email taken, please use another';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    // console.log(errors)
    // console.log(req.body)
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        errors.email = 'This user does not exist';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            email: user.email,
            username: user.username
          } 
          jwt.sign(payload, keys.secretOrKey, {expiresIn:3600}, 
            (err, token) => {res.json({
                success: true,
                token: "Bearer " + token, 
                username: user.username,
                email: user.email
              })
            })
        } else {
          errors.password = 'Incorrect password'
          return res.status(400).json(errors);
        }
      })  
  })

})


module.exports = router;





