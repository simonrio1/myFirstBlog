const blogServices = require(__dirname + "/../services/blogServices.js");
var _ = require('lodash');

exports.getHomePage = async (req, res) => {
    try {
        const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
        posts = await blogServices.getAllPosts();

        res.render("home", {content: homeStartingContent, posts: posts});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createPost = async (req, res) => {
    try {
        let new_post = {
            title: _.startCase(req.body.post_title),
            content: req.body.post_content,
            _id: _.snakeCase(req.body.post_title)
          };
        const newPost = await blogServices.createPost(new_post);
        res.redirect("/");
    } catch (err) {
        res.status(500).json({ error: err});
    }
}

exports.getPost = async (req, res) => {
    try {
        postId = _.snakeCase(req.params.postId);
        post = await blogServices.getPostById(postId);
        res.render("post", {post: post});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getComposePage = async (req, res) => {
    try {
        res.render("compose");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getAboutPage = (req, res) => {
    try {
        const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
        res.render("about", { content: aboutContent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getContactPage = async (req, res) => {
    try {
        const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
        res.render("contact", { content: contactContent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}