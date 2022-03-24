const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

const create = async carObj => {
  // DO YOUR MAGIC
  return db('cars').insert(carObj);
}

const getByVinNumber = vin => {
  return db('cars').where('vin', vin).first();
}

module.exports = { getAll, getById, create, getByVinNumber, getByVinNumber };
