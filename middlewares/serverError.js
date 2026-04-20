// middleware server errors
const serverError = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'error server' })
}

module.exports = serverError