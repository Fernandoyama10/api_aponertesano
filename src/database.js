var mysql  = require('mysql');
var connectionn = mysql.createPool({
  host: '162.241.2.103',
  user: 'rendermi_pedro10' ,
  password: 'pedrorubio10',
  database: 'rendermi_bd_apponertesano',
  port: '3306'
});

connectionn.getConnection((err,connection) => {
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
