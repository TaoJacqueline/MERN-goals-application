// @desc Get goals
// @route GET /api/goals
// @acces private
const getGoals = (req, res) => {
	res.status(200).json({ message: 'Get goals' });
};

// @desc Set goal
// @route POST /api/goals
// @acces private
const setGoals = (req, res) => {
	res.status(200).json({ message: 'Set goals' });
};

// @desc update goal
// @route PUT /api/goals/:id
// @acces private
const updateGoal = (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc delete goal
// @route DELETE /api/goals/:id
// @acces private
const deleteGoal = (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoal, deleteGoal };
