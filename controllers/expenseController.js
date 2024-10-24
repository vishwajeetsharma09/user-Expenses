const Expense = require("../models/expenseModel");
const { validatePercentageSplit } = require("../utils/validation");

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const { description, amount, creator_id, participants, split_type } =
      req.body;

    if (split_type === "percentage" && !validatePercentageSplit(participants)) {
      return res
        .status(400)
        .json({ message: "Percentages do not add up to 100%" });
    }

    const expense = new Expense({
      description,
      amount,
      creator_id,
      participants,
      split_type,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get expenses for a user
exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      "participants.user_id": req.params.user_id,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get overall expenses
exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
