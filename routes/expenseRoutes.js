const express = require('express');
const expenseController = require('../controllers/expenseController');
const router = express.Router();

router.post('/', expenseController.addExpense);  // Add expense
router.get('/:user_id', expenseController.getUserExpenses);  // Get expenses for user
router.get('/', expenseController.getOverallExpenses);  // Get all expenses

module.exports = router;
