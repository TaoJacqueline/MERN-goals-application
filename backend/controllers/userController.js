const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc register new user
// @route POST /api/users
// @acces public
const registerUser = asyncHandler(async (req, res) => {
	res.json({ message: 'register User' });
});

// @desc Authenticate a user
// @route POST /api/users/login
// @acces public
const loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'login User' });
});

// @desc get user data
// @route GET /api/users/me
// @acces public
const getMe = asyncHandler(async (req, res) => {
	res.json({ message: 'User data display' });
});

module.exports = { registerUser, loginUser, getMe };
