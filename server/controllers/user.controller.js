const asyncHandler = require('express-async-handler');
const User = require('../models/user.models');
const generateToken = require('../utilis/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token
    });
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        });
    } else {
        res.status(400).json({ message: 'Invalid Email or Password' });
    }
});

const findAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        message: 'Users list',
        data: users
    });
});

module.exports = { registerUser, authUser, findAllUsers };
