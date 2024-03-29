'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      anotherName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      author: {
        allowNull: true,
        type: Sequelize.STRING
      },
      intro: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      uploaderId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kind: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      version: {
        allowNull: true,
        type: Sequelize.STRING
      },
      language: {
        allowNull: true,
        type: Sequelize.STRING
      },
      coverImage: {
        allowNull: true,
        type: Sequelize.BLOB('long')
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};