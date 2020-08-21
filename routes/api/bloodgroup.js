const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const { BloodGroup } = require("../../models/bloodGroup");


router.get("/bloodgroup", async (req, res) => {
  const bloodgroups = await BloodGroup.find()
    .select("-__v")
    .sort("name");
  res.send(bloodgroups);
});

// router.post("/", auth, async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let genre = new Genre({ name: req.body.name });
//   genre = await genre.save();

//   res.send(genre);
// });

router.put("/:id", passport.authenticate('jwt', { session: false }), async (req, res) => {
    const errors = {};
  if (error) return res.status(400).send(error.details[0].message);

  const bloodGroup = await BloodGroup.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true
    }
  );

  if (!bloodGroup)
    return res.status(404).send("The bloodGroup with the given ID was not found.");

  res.send(bloodGroup);
});

router.delete("/:id", passport.authenticate('jwt', { session: false }), async (req, res) => {
  const bloodGroup = await BloodGroup.findByIdAndRemove(req.params.id);

  if (!bloodGroup)
    return res.status(404).send("The Blood group with the given ID was not found.");

  res.send(bloodGroup);
});

router.get("/:id", passport.authenticate('jwt', { session: false }), async (req, res) => {
  const bloodGroup = await BloodGroup.findById(req.params.id).select("-__v");

  if (!bloodGroup)
    return res.status(404).send("The blood group with the given ID was not found.");

  res.send(bloodGroup);
});

module.exports = router;
