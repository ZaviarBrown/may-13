const express = require('express');
const eldenRouter = require('./routes/eldenRing');
const hadesRouter = require('./routes/hades');
const app = express();

app.use(express.json());
app.use('/eldenRing', eldenRouter);
app.use('/hades', hadesRouter);

// I want to make a game library

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the game library!',
    });
});

// app.get('/eldenRing/bosses', (req, res) => {
//     res.json({
//         bosses: ['Radahn', 'Elden Beast', 'Tree Sentinel', 'Some Guy'],
//     });
// });

// app.get('/hades/bosses', (req, res) => {
//     res.json({
//         bosses: ['Megara', 'Bone Hydra', 'Hades'],
//     });
// });

app.listen(5000, () => console.log('We routin babyyyy 5000'));
