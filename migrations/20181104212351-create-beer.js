'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      taste_rating: {
        type: Sequelize.FLOAT
      },
      bottle_rating: {
        type: Sequelize.FLOAT
      },
      is_craft: {
        type: Sequelize.BOOLEAN
      },
      brewery_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Breweries', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beers');
  }
};