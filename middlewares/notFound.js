// middleware 404 errors
const notFound = (req, res, next) => {
    res.status(404).json({ error: 'error 404' })
}

module.exports = notFound