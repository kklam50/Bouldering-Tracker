const dbConfig = {
    dbCreds: {
        host: '',
        user: '',
        password: '',
        database: '',
        port: 0000,
    }
}

const mysql = require("mysql2");

function query(sql, params) {
    const connection = mysql.createConnection(dbConfig.dbCreds);

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
