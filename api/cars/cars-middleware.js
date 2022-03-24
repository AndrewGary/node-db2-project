const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  Cars.getById(req.params.id)
  .then(car => {
    if(car){
      next();
    }else{
      next({ status: 404, message: 'not found'})
    }
  })
  .catch(error => {
    next(error);
  })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  
  if(!req.body.model){
    next({ status: 400, message: 'model is missing'});
  }

  if(!req.body.vin){
    next({ status: 400, message: 'vin is missing'});
  }

  if(!req.body.mileage){
    next({ status: 400, message: 'mileage is missing'});
  }

  if(!req.body.make){
    next({ status: 400, message: 'make is missing'});
  }
  next();
}

  const checkVinNumberValid = (req, res, next) => {
    // DO YOUR MAGIC
    const isValidVin = vinValidator.validate(req.body.vin);
    
    if(isValidVin){
      next()
    }else{
      next({ status: 400, message: `vin ${req.body.vin} is invalid`})
    }
  }

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  Cars.getByVinNumber(req.body.vin)
  .then(car => {
    if(car){
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    } else{
      next();
    }
  })
  .catch(error => {
    next(error);
  })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
