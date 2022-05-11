const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route GET /api/goals
// @acces private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get goals' });
});

// @desc Set goal
// @route POST /api/goals
// @acces private
const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}
	res.status(200).json({ message: 'Set goals' });
});

// @desc update goal
// @route PUT /api/goals/:id
// @acces private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc delete goal
// @route DELETE /api/goals/:id
// @acces private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoal, deleteGoal };
