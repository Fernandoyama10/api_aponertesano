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

  exports.getyucfoodName = async (req, res) => {
    const params = req.params;
    mysqlConnection.query("SELECT * from yucatan_food where food_name like '%" + req.params.name + "%'", [params], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }