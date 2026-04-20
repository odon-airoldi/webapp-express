const connection = require('../database/connection')

// index
const index = (req, res) => {
    res.send('movies')
}

// show
const show = (req, res) => {
    res.send('show movie')
}

module.exports = {
    index,
    show
}