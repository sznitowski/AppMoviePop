const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        languaje: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'User',
        },
    },
    {
        timesamps: false,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;