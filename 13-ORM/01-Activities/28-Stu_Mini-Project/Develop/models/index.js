const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  // Define an alias for when data is retrieved
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  // Define an alias for when data is retrieved
});

module.exports = { Traveller, Location, Trip };
