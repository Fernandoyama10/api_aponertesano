var mysql = require('mysql');
var connectionn = mysql.createPool({
    host: 'mysql-79989-0.cloudclusters.net',
    user: 'admin',
    password: 'F2xCEqDT',
    database: 'WEBHOOKSMS',
    port: '12451'
});

connectionn.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection failed !');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections !');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused !');
        }
    }
    if (connection) {
        connection.release();
        console.log('Base de datos conectada !');
        return;
    }
});

module.exports = connectionn;
