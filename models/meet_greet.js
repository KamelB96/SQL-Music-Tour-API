// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Meet_greet extends Model{}

Meet_greet.init({
    meet_greet_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true 
    },
    meet_end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    meet_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    band_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    event_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
}, {
    sequelize,                           
    modelName: 'Meet_greet',
    tableName: 'meet_greet',
    timestamps: false
}) 

// EXPORT
module.exports = Meet_greet