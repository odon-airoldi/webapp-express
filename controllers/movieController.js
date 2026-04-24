const connection = require('../database/connection')


// index
const index = (req, res) => {

    const query_sql = 'SELECT * FROM movies'

    connection.query(query_sql, (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'query error' })
        }
        res.json(results)
    });

}


// show
const show = (req, res) => {

    const query_sql = 'SELECT * FROM movies WHERE id = ?'
    const query_sql_reviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    const id = Number(req.params.id)


    connection.query(query_sql, [id], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'query error' })
        }
        if (results.length === 0) {
            console.error(err)
            return res.status(404).json({ error: 'movie not found' })
        }

        connection.query(query_sql_reviews, [id], (err, resultsReview) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'query error' })
            }

            // join
            results[0].reviews = resultsReview

            res.json(results[0])

        })


    })

}

// post
const store = (req, res) => {

    const movieid = Number(req.params.id)
    const { name, vote, text } = req.body

    const query_sql = `
        INSERT INTO movies_db.reviews (movie_id, name, vote, text)
        VALUES (?, ?, ?, ?)
    `

    connection.query(query_sql, [movieid, name, vote, text], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'query error' })
        }

        // 
        const newRev = {
            id: results.insertId,
            movie_id: movieid,
            name,
            vote,
            text
        }

        res.status(201).json({
            review: newRev
        })


    })

}

module.exports = {
    index,
    show,
    store
}