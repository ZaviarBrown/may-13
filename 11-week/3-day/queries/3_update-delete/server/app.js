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

// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
    const puppyToUpdate = await Puppy.findByPk(req.params.puppyId);
    const { ageYrs, weightLbs, microchipped } = req.body;

    // if (weightLbs > 10000) {
    //     return res.json({
    //         bruh: 'Stop joshing me',
    //     });
    // }

    await puppyToUpdate.update({ ageYrs, weightLbs, microchipped });

    // const updates = {};

    // if (ageYrs !== undefined) {
    //     updates.ageYrs = ageYrs;
    // }

    // if (weightLbs !== undefined) {
    //     updates.weightLbs = weightLbs;
    // }

    // if (microchipped !== undefined) {
    //     updates.microchipped = microchipped;
    // }
    // puppyToUpdate.set(updates);
    // await puppyToUpdate.save();

    // puppyToUpdate.set({ ageYrs: undefined });
    // await puppyToUpdate.save();

    // const puppyToSend = await Puppy.findByPk(req.params.puppyId);

    return res.json({
        message: 'Things got updated!',
        puppy: puppyToUpdate,
        // puppy: puppyToSend,
    });
});

// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    const puppyToMurderHeartlessly = await Puppy.findOne({
        where: { id: req.params.puppyId },
    });

    await puppyToMurderHeartlessly.destroy();

    return res.json({
        message: 'This puppy dead',
        puppy: puppyToMurderHeartlessly,
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
