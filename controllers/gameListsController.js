const { Game } = require('../models')

module.exports = {
    gamelist: async (req, res) => {
        try{ Game.findAll()
            .then(gamelist => {
                res.status(200).json(gamelist)
            }) 
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
        
}}