const express = require("express");

const {
    getHomePage,
    getComposePage,
    createPost,
    getPost,
    getAboutPage,
    getContactPage
} = require(__dirname+"/../controllers/blogController.js");

const router = express.Router();

router.route("/").get(getHomePage);

router.route("/compose").get(getComposePage).post(createPost);

router.route("/post/:postId").get(getPost);

router.route("/about").get(getAboutPage);

router.route("/contact").get(getContactPage);

module.exports = router;