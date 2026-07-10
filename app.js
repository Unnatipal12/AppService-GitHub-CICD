const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('APP.JS IS RUNNING');
});

app.get('/environment', (req, res) => {
    res.send(process.env.ENVIRONMENT || 'Not Set');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});