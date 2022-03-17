const asyncHandler = require('express-async-handler')
const Post = require('../models/post.models')

const findAllPosts = asyncHandler(async (req, res) => {
    await Post.find().then(data => {
        res.status(200).json({
            message: 'Posts list',
            data
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Someting went wrong',
            error: error
        })
    });
})

const getPostById = asyncHandler(async (req, res) => {
   await Post.findById(req.params.id).then(data => {
       res.status(200).json({
           message: 'Post',
           data
       })
   }).catch(error => {
       res.status(500).json({
           message: 'post not found',
           error
       })
   })

})

const createPost = asyncHandler(async (req, res) => {
    const { title, languaje, gender, date, synopsis, image } = req.body;

    if (!title || !languaje || !gender || !date || !synopsis || !image) {
        res.status(400).json({
            message: 'please fill all the fields',
        })

    } else {
        const post = new Post({ title, languaje, gender, date, synopsis, image });

        const createdPost = await post.save();

        res.status(201).json(createdPost);
    }
})

const updatePost = asyncHandler(async (req, res) => {
    const { title, languaje, gender, date, synopsis, image } = req.body;

    const post = await Post.findById(req.params.id);

    if (post) {
        post.title = title;
        post.languaje = languaje;
        post.gender = gender;
        post.date = date;
        post.synopsis = synopsis;
        post.image = image;

        const updatedPost = await post.save()
        res.json(updatedPost)
    } else {
        res.status(404).json({
            message: 'Post not found'
        });
    }
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
        await post.remove();
    } else {
        res.status(404).json({
            message: 'Post not found'
        });
    }

})

module.exports = { findAllPosts, createPost, getPostById, updatePost, deletePost };