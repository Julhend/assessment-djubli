module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('creditDetails', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      creditType: {
        type: Sequelize.STRING,
      },
      downPayment: {
        type: Sequelize.INTEGER,
      },
      tenor: {
        type: Sequelize.INTEGER,
      },
      installment: {
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
    await queryInterface.dropTable('creditDetails');
  },
};
