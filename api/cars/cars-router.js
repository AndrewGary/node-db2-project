// DO YOUR MAGIC
const express = require('express');

const Cars = require('./cars-model');
const{
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid
} = require('./cars-middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Cars.getAll()
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(error => {
        next(error);
    })
})

router.get('/:id', checkCarId, (req, res, next) => {

    Cars.getById(req.params.id)
    .then(car => {
        if(car){
            res.status(200).json(car);
        }else{
            next(err)
        }
    })
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Cars.create(req.body)
    .then(resp => {
        res.status(400).json(req.body);
    })
    .catch(error => {
        next(error);
    })
})

module.exports = router;