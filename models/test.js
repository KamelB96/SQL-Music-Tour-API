'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Stage_event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Stage_event.init({
        stage_event__id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stage_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references :{
                model: 'stages',
                key: 'stage_id'
              }
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references :{
                model: 'events',
                key: 'event_id'
              }
        },
    }, {
        sequelize,
        modelName: 'StageEvent',
        tableName: 'stage_events',
        timestamps: false
    })

    return StageEvent;
};