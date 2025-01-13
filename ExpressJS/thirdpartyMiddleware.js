const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());


app.get('/setcookie', (req, res) => {
    res.cookie('username', 'Avitosh', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});


app.get('/getcookie', (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`Welcome back, ${username}!`);
    } else {
        res.send('No cookie found');
    }
});

// A route to clear a cookie
app.get('/clearcookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});

app.listen(9564, () => {
    console.log('Server is running on http://localhost:9564');
});
