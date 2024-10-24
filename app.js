const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/expense-sharing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.log('MongoDB connection error:', error);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
