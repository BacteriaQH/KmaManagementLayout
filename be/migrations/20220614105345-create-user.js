'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            roleid: {
                type: Sequelize.STRING,
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
