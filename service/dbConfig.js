const mysql = require("mysql2");

const config = {
    dbCreds: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bouldering-tracker',
        port: 3306,
    }
}

function query(sql, params) {
    const connection = mysql.createConnection(config.dbCreds);

    return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (err) reject (err);
            else resolve(results);
        })
    })
}

module.exports = {
    query
}