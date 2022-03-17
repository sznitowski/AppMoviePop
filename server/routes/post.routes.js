const express = require('express');
const { findAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost
    } = require('../controllers/post.controller')

const router = express.Router();

router.route('/').get(findAllPosts)
router.route('/:id').get(getPostById)
router.route('/create').post(createPost)
router.route('/:id').put(updatePost)
router.route('/:id').delete(deletePost)

module.exports = router;