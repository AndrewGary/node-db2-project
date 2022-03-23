// STRETCH
let count = 0;
exports.seed = function(knex){
    return knex('cars').insert([
        {
          vin: '11111',
          make: 'Honda',
          model: 'civic',
          mileage: 444
        },
        {
            vin: '22222',
            make: 'Honda',
            model: 'civic',
            mileage: 444
          },
          {
            vin: '33333',
            make: 'Honda',
            model: 'civic',
            mileage: 444
          },
          {
            vin: '44444',
            make: 'Honda',
            model: 'civic',
            mileage: 444
          },
          {
            vin: '55555',
            make: 'Honda',
            model: 'civic',
            mileage: 444
          }
      ]);
}