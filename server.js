// app.js
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello, World Jenkins!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
