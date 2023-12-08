const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const salesRoute = require('./routes/SalesRoute');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/vendors', salesRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await connectDB();
    } catch (error) {
        console.error(error);
    }
});