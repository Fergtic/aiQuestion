const express = require("express");
 
const recordRoutes = express.Router();

const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
 
recordRoutes.route("/posts").get(function (req, res) {
 let db_connect = dbo.getDb("posts");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});





// Get a single record by id
recordRoutes.route("/posts/:id").get(function (req, res) {
 let db_connect = dbo.getDb("posts");
 console.log(req.params.id)
 console.log("called")
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});




//// Get a single record by id
//recordRoutes.route("/record/:id").get(function (req, res) {
// let db_connect = dbo.getDb();
// let myquery = { _id: ObjectId(req.params.id) };
// db_connect
//   .collection("records")
//   .findOne(myquery, function (err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
//});
// 
// Create a new record.
recordRoutes.route("/posts/add").post(function (req, response) {
 let db_connect = dbo.getDb("posts");
 console.log("hello there")
 let myobj = {
   postContent: req.body.postContent,
   replies: []
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});


//recordRoutes.route("/comments/add").post(function (req, response) {
// 
//  let db_connect = dbo.getDb("posts");
//  let myobj = {
//    discussion_id: req.body.postId,
//    replyContent: req.body.replyContent,
//  };
//  db_connect.collection("comments").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// Update a record by id.
recordRoutes.route("/comments/:id").post(function (req, response) {
  console.log("hello")
  console.log(req.body)
 let db_connect = dbo.getDb("posts");
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $push: { replies: req.body.replyContent },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
//// Delete a record
//recordRoutes.route("/:id").delete((req, response) => {
// let db_connect = dbo.getDb();
// let myquery = { _id: ObjectId(req.params.id) };
// db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//   if (err) throw err;
//   console.log("1 document deleted");
//   response.json(obj);
// });
//});
// 
module.exports = recordRoutes;