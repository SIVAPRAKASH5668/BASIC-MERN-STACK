// Setting environment
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose'); // Fixed typo here
const workoutRoute = require('./route/workout');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workout', workoutRoute);

// Start server
const PORT = process.env.PORT || 5000; // Default to 5000 if no PORT is specified

// MongoDB connection
mongoose.connect(process.env.MONG_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
