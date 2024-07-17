const express = require('express');
require('express-async-errors');
const dogRouter = require('./routes/dogs');
const app = express();

app.use(express.json()); //? boilerplate

app.use((req, res, next) => {
    const { method, url } = req;

    console.log('\n', 'Method: ', method, '\n');
    console.log('\n', 'URL: ', url, '\n');

    res.on('finish', () => {
        console.log('\n', 'Status Code: ', res.statusCode, '\n');
    });

    next();
});

app.use('/dogs', dogRouter);

// For testing purposes, GET /
app.get('/', (req, res) => {
    res.json(
        'Express server running. No content provided at root level. Please use another route.'
    );
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
    // send the body as JSON with a Content-Type header of "application/json"
    // finishes the response, res.end()
    res.json(req.body);
    next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
    throw new Error('Hello World!');
});

app.use((req, res, next) => {
    const myError = new Error('I have no clue what you are looking for');

    myError.statusCode = 404;

    throw myError;
});

app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.statusCode || 500);

    res.json({
        message: err.message || 'Something went wrong',
        statusCode: err.statusCode || 500,
        stack: process.env.ENVIRONMENT === 'production' ? undefined : err.stack,
    });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
