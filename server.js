const express = require('express')
const app = express()
const movieRouter = require('./routes/movies')
const serverError = require('./middlewares/serverError')
const notFound = require('./middlewares/notFound')
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/movies', movieRouter)

// middleware server errors
app.use(serverError)

// middleware 404 errors
app.use(notFound)