const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies for this app
app.use(express.json());

// Handle form submission
app.post('/submit', (req, res) => {
    const response = req.body.response;
    console.log('Received response:', response);
    res.json({ message: 'Response received successfully!' });
});

// Start the server
const PORT = 3001;
const HOST ='0.0.0.0';
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
