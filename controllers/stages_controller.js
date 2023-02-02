// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db 

// FIND ALL EVENTS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ 'stage_name', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})



// FIND A SPECIFIC STAGE
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedstages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = stages
