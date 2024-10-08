// ------------------------------  SERVER DATA ------------------------------

let nextDogId = 1;
function getNewDogId() {
    const newDogId = nextDogId;
    nextDogId++;
    return newDogId;
}

const dogs = [
    {
        dogId: getNewDogId(),
        name: 'Fluffy',
    },
    {
        dogId: getNewDogId(),
        name: 'Digby',
    },
];

// ------------------------------  MIDDLEWARES ------------------------------

const validateDogInfo = (req, res, next) => {
    if (!req.body || !req.body.name) {
        const err = new Error('Dog must have a name');
        err.statusCode = 400;
        next(err);
    }
    next();
};
const validateDogId = (req, res, next) => {
    console.log('\n\n\n', 'AM I EVEN BEING RAN?!?!?!?!', '\n\n\n\n');

    const { dogId } = req.params;
    const dog = dogs.find((dog) => dog.dogId == dogId);
    if (!dog) {
        const err = new Error("Couldn't find dog with that dogId");
        err.statusCode = 404;
        throw err;
        // return next(err); // alternative to throwing it
    }
    next();
};

// ------------------------------  ROUTE HANDLERS ------------------------------

// GET /dogs
const getAllDogs = (req, res) => {
    res.json(dogs);
};

// GET /dogs/:dogId
const getDogById = (req, res) => {
    const { dogId } = req.params;
    const dog = dogs.find((dog) => dog.dogId == dogId);
    res.json(dog);
};

// POST /dogs
const createDog = (req, res) => {
    const { name } = req.body;
    const newDog = {
        dogId: getNewDogId(),
        name,
    };
    dogs.push(newDog);
    res.json(newDog);
};

// PUT /dogs/:dogId
const updateDog = (req, res) => {
    const { name } = req.body;
    const { dogId } = req.params;
    const dog = dogs.find((dog) => dog.dogId == dogId);
    dog.name = name;
    res.json(dog);
};

// DELETE /dogs/:dogId
const deleteDog = (req, res) => {
    const { dogId } = req.params;
    const dogIdx = dogs.findIndex((dog) => dog.dogId == dogId);
    dogs.splice(dogIdx, 1);
    res.json({ message: 'success' });
};

// ------------------------------  ROUTER ------------------------------

const express = require('express');
const dogRouter = express.Router();
const dogFoodRouter = require('./dog-foods');

//! /dogs

dogRouter.get('/', getAllDogs);

dogRouter.get('/:dogId', validateDogId, getDogById);

dogRouter.post('/', validateDogInfo, createDog);

dogRouter.put('/:dogId', validateDogId, validateDogInfo, updateDog);

dogRouter.delete('/:dogId', validateDogId, deleteDog);

dogRouter.use('/:dogId/foods', validateDogId, dogFoodRouter);

module.exports = dogRouter;
