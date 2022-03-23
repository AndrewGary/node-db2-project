const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id)
}

const create = async carObj => {
  // DO YOUR MAGIC
  return db('cars').insert(carObj);
}

module.exports = { getAll, getById, create };
