// DO YOUR MAGIC
const express = require('express');
const vinValidator = require('vin-validator');

const Cars = require('./cars-model');

//Come back and put middleware here
////////////////////////////////////
////////////////////////////////////

const router = express.Router();

router.get('/', (req, res) => {
    Cars.getAll()
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Server error, could not get cars'});
    })
})

router.get('/:id', (req, res) => {



    Cars.getById(req.params.id)
    .then(car => {
        if(car.length > 0){
            car.id = null;

            console.log('car: ', car);
            res.status(200).json(car.id=null);
        }else{
            res.status(404).json({ message: 'could not find a car with that id'})
        }
    })
    .catch(error => {
        res.status(400).json({ message: 'Server error, could not fetch car'})
    })
})

router.post('/', (req, res) => {

    if(!req.body.model){
        res.status(400).json({ message: 'model is missing'})
    }

    if(!req.body.vin){
        res.status(400).json({ message: 'vin is missing' })
        return;
    }

    if(!req.body.mileage){
        res.status(400).json({ message: 'mileage is missing' })
    }

    if(!req.body.make){
        res.status(400).json({ message: 'make is missing'})
    }

    if(!vinValidator.validate(req.body.vin)){
        res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
    }


    Cars.create(req.body)
    .then(resp => {
        res.status(400).json(req.body);
    })
    .catch(error => {
        res.status(400).json({ message: `vin ${req.body.vin} already exists` })
    })
})

module.exports = router;