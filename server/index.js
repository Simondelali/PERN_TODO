const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

app.listen(5000, () => console.log('Server has started on port 5000'));





