const express = require('express');
const ride = express();


ride.get('/', (req, res) => {
    res.send('Hello everyone, have a safe journey');
});


ride.listen(3696, 'localhost', () => {
    console.log('Server is running on port 3696');
});
