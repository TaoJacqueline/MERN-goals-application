const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc register new user
// @route POST /api/users
// @acces public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all required fields');
	}

	// Check if the user exists
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// Hash the password with bcrypt
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// create user in db
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	// verify if user has been created
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
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
