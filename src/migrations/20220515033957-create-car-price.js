module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carPrices', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      creditPrice: {
        type: Sequelize.INTEGER,
      },
      carId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'cars',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carPrices');
  },
};
