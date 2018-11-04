'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Brewery.associate = function(models) {
    Brewery.hasMany(models.Beer, {
      foreignKey: 'brewery_id',
      as: 'beers',
    });
  };
  return Brewery;
};