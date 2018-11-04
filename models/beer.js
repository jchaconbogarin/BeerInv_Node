'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    taste_rating: DataTypes.FLOAT,
    bottle_rating: DataTypes.FLOAT,
    is_craft: DataTypes.BOOLEAN,
    brewery_id: DataTypes.INTEGER
  }, {});
  Beer.associate = function(models) {
    Beer.belongsTo(models.Brewery, {foreignKey: 'brewery_id'});
  };
  return Beer;
};