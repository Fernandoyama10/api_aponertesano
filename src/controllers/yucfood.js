const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.getyucfood = async (req, res) => {
    mysqlConnection.query('SELECT * FROM yucatan_food', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }

  exports.getyucfoodID = async (req, res) => {
    const params = req.params;
    mysqlConnection.query('SELECT * FROM yucatan_food WHERE ?', [params], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  }