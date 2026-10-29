const express = require('express');
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Hello! GUDIPUDI DHARANISREE');
});

// About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'GUDIPUDI DHARANISREE',
        section: 'CSE (Generative AI)'
    });
});

// Current date and time route
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toLocaleString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
