const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

const app = express()
app.use(express.json()) // per JSON


// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)

// post
router.post('/:id/reviews', movieController.store)

module.exports = router