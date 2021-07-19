'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'eliquids',
            [
                {
                    name: 'Lemon Tart',
                    brand: 'Dinner Lady',
                    description: 'Desserts: incredible lemon pie taste.',
                    pg: 30,
                    vg: 70,
                    milliliters: 60,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Bubble Truble',
                    brand: 'Dinner Lady',
                    description: 'Ice: an awesome gummy iced taste.',
                    pg: 30,
                    vg: 70,
                    milliliters: 60,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('eliquids', null, {});
    },
};
