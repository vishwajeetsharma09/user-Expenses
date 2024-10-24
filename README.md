# Daily Expenses Sharing Backend

This project is a backend service for a daily-expenses sharing application, which allows users to add and manage expenses that can be split using three different methods: **equal amounts**, **exact amounts**, and **percentages**. It also provides the ability to generate and download balance sheets.

## Features
- **User Management**:
  - Create and manage users (email, name, and mobile number).
  
- **Expense Management**:
  - Add expenses with flexible splitting options:
    - Equal split among participants.
    - Exact amounts specified for each participant.
    - Percentage-based split (ensures the total adds up to 100%).
  
- **Balance Sheet**:
  - View individual expenses.
  - View overall expenses across all users.
  - Download a balance sheet.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [License](#license)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/daily-expenses-sharing-backend.git
   cd daily-expenses-sharing-backend
Install Dependencies: Make sure you have Node.js installed, then run:

```npm install ```

Usage
Postman or Curl can be used to test the API.
To add expenses, create users first, then add expenses using the API.
Adding a User:
Make a POST request to /users to create a new user:

json
```

{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "1234567890"
}
Adding an Expense:
Make a POST request to /expenses with the details of the expense. Here's an example:

json

{
  "description": "Dinner",
  "amount": 3000,
  "creator_id": "605c72afeb1d5a2044e85bf6",
  "participants": [
    {
      "user_id": "605c72afeb1d5a2044e85bf6",
      "owed_amount": 1000,
      "paid_amount": 3000
    },
    {
      "user_id": "605c72afeb1d5a2044e85bf7",
      "owed_amount": 1000,
      "paid_amount": 0
    },
    {
      "user_id": "605c72afeb1d5a2044e85bf8",
      "owed_amount": 1000,
      "paid_amount": 0
    }
  ],
  "split_type": "equal"
}
```
API Endpoints
User Endpoints
Create a User: POST /users

Creates a new user with name, email, and mobile.
Request Body:
json
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "1234567890"
}
```
Get User Details: GET /users/:id

Retrieve user details by their ID.
Expense Endpoints
Add Expense: POST /expenses

Adds a new expense, split equally, by exact amounts, or by percentage.
Request Body:
json
```
{
  "description": "Dinner",
  "amount": 3000,
  "creator_id": "605c72afeb1d5a2044e85bf6",
  "participants": [
    {
      "user_id": "605c72afeb1d5a2044e85bf6",
      "owed_amount": 1000,
      "paid_amount": 3000
    },
    {
      "user_id": "605c72afeb1d5a2044e85bf7",
      "owed_amount": 1000,
      "paid_amount": 0
    }
  ],
  "split_type": "equal"
}
```
Retrieve Individual User Expenses: GET /expenses/user/:user_id

Retrieves all expenses for a specific user by their ID.
Retrieve Overall Expenses: GET /expenses

Retrieves all expenses in the system.
Download Balance Sheet: GET /expenses/download

Generates a downloadable balance sheet (e.g., CSV format).
Technologies Used
Node.js: JavaScript runtime for building fast and scalable server applications.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database used to store user and expense data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
JWT (JSON Web Tokens): For authentication (optional, if adding auth).
Postman: Tool for testing API endpoints.
File Structure
```
├── models/                 # Mongoose schema models
│   ├── userModel.js        # User schema
│   ├── expenseModel.js     # Expense schema
├── controllers/            # Controller functions
│   ├── userController.js   # Logic for user routes
│   ├── expenseController.js# Logic for expense routes
├── routes/                 # API route definitions
│   ├── userRoutes.js       # User-related routes
│   ├── expenseRoutes.js    # Expense-related routes
├── .env                    # Environment variables
├── app.js                  # Main application file
├── package.json            # Project dependencies and scripts
```
