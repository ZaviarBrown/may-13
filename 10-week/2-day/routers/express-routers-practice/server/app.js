const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const colorRouter = require('./routes/colors');
app.use('/colors', colorRouter);

app.get('/', (req, res) => {
    res.send('Hello darkness my old friend');
});

app.get('/people', (req, res) => {
    res.json('I promise Im human');
});

app.use('/people', peopleRouter);

app.get('/people/robots', (req, res) => {
    res.json('Im not so human');
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
