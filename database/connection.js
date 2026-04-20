// Get the client
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'db_username',
    password: process.env.DB_PASSWORD || 'db_password',
    database: process.env.DB_NAME || 'db_name',
});

connection.connect((err) => {
    if (err) {
        console.error('Error', err)
    }
    console.log('Connected MySQL'); // fields contains extra meta data about results, if available
}
);

module.exports = connection