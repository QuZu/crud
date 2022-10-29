const express = require("express");
//const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const { request } = require("express");
// This section will help you get a list of all the users.
userRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("refmes");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
userRoutes.route("/use/addrs/signup").post(function (req, response) {

    let db_connect = dbo.getDb("refmes");
  
    let user = {
      username: req.body.username,
      password: req.body.password,
    };

    db_connect.collection("users").find({ "email": req.body.email }).toArray()
            .then((result) => {
              if (result.length === 0) {
                db_connect.collection("users").insertOne(user, function (err, res) {
                  if (err) throw err;
                  response.json(res);
                });
              }
              else {
                response.json({ message: 'This email has already been used!' });
              }
            })
   
});
module.exports = userRoutes;