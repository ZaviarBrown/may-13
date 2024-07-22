// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();
const colorRouter = require('./routes/color');

// Express using json - DO NOT MODIFY
app.use(express.json());
app.use('/colors', colorRouter);

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: 'This is the home page!',
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
