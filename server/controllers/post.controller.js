const asyncHandler = require('express-async-handler');
const Post = require('../models/post.models');

const findAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
    res.status(200).json({
        message: 'Posts list',
        data: posts
    });
});

const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        res.status(200).json({
            message: 'Post',
            data: post
        });
    } else {
        res.status(404).json({
            message: 'Post not found'
        });
    }
});

const createPost = asyncHandler(async (req, res) => {
    const { title, language, gender, date, synopsis, image } = req.body;
    if (!title || !language || !gender || !date || !synopsis || !image) {
        res.status(400).json({
            message: 'Please provide all required fields'
        });
        return;
    }
    const post = new Post({ title, language, gender, date, synopsis, image });
    const createdPost = await post.save();
    res.status(201).json(createdPost);
});

const updatePost = asyncHandler(async (req, res) => {
    const { title, language, gender, date, synopsis, image } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404).json({
            message: 'Post not found'
        });
        return;
    }
    post.title = title;
    post.language = language;
    post.gender = gender;
    post.date = date;
    post.synopsis = synopsis;
    post.image = image;
    const updatedPost = await post.save();
    res.json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404).json({
            message: 'Post not found'
        });
        return;
    }
    await post.remove();
    res.status(200).json({
        message: 'Post deleted successfully'
    });
});

module.exports = { findAllPosts, createPost, getPostById, updatePost, deletePost };
