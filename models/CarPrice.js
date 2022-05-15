const v4 = require('uuid');
const {
  Model,
} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class CarPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car);
    }
  }
  CarPrice.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: v4,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    creditPrice: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment().format('YYYY-MM-DD HH:mm:00'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment().format('YYYY-MM-DD HH:mm:00'),
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'CarPrice',
  });
  return CarPrice;
};
