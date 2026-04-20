const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const movieRouter = require('./routes/movies')
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/movies', movieRouter)