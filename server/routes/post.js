const express = require("express");
 
// postRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /post.
const postRoutes = express.Router();
 
// Connect to the database
const dbo = require("../db/conn");
 
// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


postRoutes.route("/post").get(function (req, res) {
    let db_connect = dbo.getDb("posts");
    db_connect
      .collection("records")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });
   
module.exports = postRoutes;