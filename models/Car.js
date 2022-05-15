const v4 = require('uuid');
const {
  Model,
} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.CarPrice);
      this.hasMany(models.CarDetail);
      this.belongsTo(models.Seller);
    }
  }
  Car.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: v4,
    },
    carBrand: {
      type: DataTypes.STRING,
    },
    carModel: {
      type: DataTypes.STRING,
    },
    carYear: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
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
    modelName: 'Car',
  });
  return Car;
};
