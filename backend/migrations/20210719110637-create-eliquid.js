'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('eliquids', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            brand: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT,
            },
            pg: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            vg: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            milliliters: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('eliquids');
    },
};
