const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all todos

// Get a todo

// Update a todo

// Delete a todo




app.listen(5000, () => console.log('Server has started on port 5000'));





