const PostModel = require(__dirname+"/../models/post.js");


exports.getAllPosts = async () => {
    return await PostModel.find();
}

exports.getPostById = async (id) => {
    return await PostModel.findById(id);
}

exports.createPost = async (post) => {
    return await PostModel.create(post);
}