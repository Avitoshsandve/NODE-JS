const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


app.use((req, res, next) => {
    const logdetail = `
    Method: ${req.method}
    URL: ${req.url}
    Headers: ${JSON.stringify(req.headers)}
    Timestamp: ${new Date().toISOString()}
    `;

    fs.appendFile(path.join(__dirname, 'logs', 'requests.log'), logdetail, (err) => {
        if (err) {
            console.error('Error in logging request:', err);
        }
    });
    next();
});


app.get('/', (req, res) => {
    res.send('Request submitted successfully');
});


app.listen(3569, 'localhost', () => {
    console.log('Server is running on port 3569');
});

