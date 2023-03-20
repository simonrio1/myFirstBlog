//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const blogRouter = require(__dirname+"/routes/blogRoutes.js");
var _ = require('lodash');
// const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/", blogRouter);

main().catch(err => console.log(err));

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/myblog');
} 


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
