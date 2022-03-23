exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin', 100).unique().notNullable();
    tbl.text('make', 100).notNullable();
    tbl.text('model', 100).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('title');
    tbl.text('transmission');
  });
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
