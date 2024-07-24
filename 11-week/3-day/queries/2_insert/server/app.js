// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

    res.json(allPuppies);
});

// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/build', async (req, res, next) => {
    const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

    const newPuppyBuild = Puppy.build({
        name,
        ageYrs,
        breed,
        weightLbs,
        microchipped,
    });

    // console.log('\n\nBefore save\n', newPuppyBuild);

    const savedPuppy = await newPuppyBuild.save();

    // console.log('\n\nAfter save\n', newPuppyBuild);
    // console.log('\n\nThe save!\n', savedPuppy);

    return res.json({
        message: 'Successfully birthed a new pupper <3',
        data: savedPuppy, //? either works
        // data: newPuppyBuild, //? either works
    });
});

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/create', async (req, res, next) => {
    const newPuppy = await Puppy.create(req.body);

    return res.json({
        message: 'New pupper has entered this world!',
        data: newPuppy,
    });
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: 'API server is running',
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
