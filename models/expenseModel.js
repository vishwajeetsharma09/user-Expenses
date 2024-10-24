const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      owed_amount: Number,
      paid_amount: Number,
    },
  ],
  split_type: {
    type: String,
    enum: ["equal", "exact", "percentage"],
    required: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
