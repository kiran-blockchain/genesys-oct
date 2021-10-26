const db = require("../models");
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = async(req, res) => {
  let usersList = await db.user.find({});
  res.json(usersList);
  //res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
