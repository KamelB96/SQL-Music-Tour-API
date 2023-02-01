'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      end_time: {
        type: Sequelize.DATE
      },
      start_time: {
        type: Sequelize.DATE
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Set_times');
  }
};