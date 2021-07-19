'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Eliquid extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here (relations)
        }
    }
    Eliquid.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'This name already exists on your E-liquids collection',
                },
                validate: {
                    notEmpty: { msg: 'This field is required' },
                },
            },
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'This field is required' },
                },
            },
            description: DataTypes.TEXT,
            pg: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'This field is required' },
                    isNumeric: { msg: 'This field must be numeric' },
                },
            },
            vg: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'This field is required' },
                    isNumeric: { msg: 'This field must be numeric' },
                },
            },
            milliliters: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'This field is required' },
                    isNumeric: { msg: 'This field must be numeric' },
                },
            },
        },
        {
            sequelize,
            modelName: 'Eliquid',
            tableName: 'eliquids',
        }
    );
    return Eliquid;
};
