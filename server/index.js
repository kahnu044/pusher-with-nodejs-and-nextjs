require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "Welcome to pusher server"
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});