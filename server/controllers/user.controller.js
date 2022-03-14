const asyncHandler = require('express-async-handler');
const User = require('../models/user.models');
const generateToken = require('../utilis/generateToken');

//POST registerfunction /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Error occured')
    }
});

//POST loginfunction /api/users/login
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid Email or Password')
    }
});


const findAllUsers = asyncHandler(async (req, res) => {
     await User.find().then(data => {
        res.status(200).json({
            message: 'users list',
            data
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Someting went wrong',
            error: error
        })
    });
})


module.exports = { registerUser, authUser, findAllUsers };