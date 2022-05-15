const v4 = require('uuid');
const {
  Model,
} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class CreditDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.notes);
    }
  }
  CreditDetail.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: v4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditType: {
      type: DataTypes.STRING,
    },
    downPayment: {
      type: DataTypes.INTEGER,
    },
    tenor: {
      type: DataTypes.INTEGER,
    },
    installment: {
      type: DataTypes.INTEGER,
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
    modelName: 'CreditDetail',
  });
  return CreditDetail;
};
