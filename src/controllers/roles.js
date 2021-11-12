const mysqlConnection = require('../database');
const mysql = require("mysql");
const { request } = require('../../app');

exports.getroles = async (req, res) => {
  mysqlConnection.query('SELECT * FROM roles', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}

exports.addrole = async (req, res) => {
  try {
    const {role_name} = req.body;
    mysqlConnection.query('INSERT INTO roles set ?', { role_name: role_name}, (error, resultado) => {
      
      if (error) {
        console.log(res);
        res.send({ message: "Error", statusCode: 400 });

      } else 
      {
            console.log('Se registro totalmente');
            res.send(resultado);
      }
    });
  } catch (e) 
  {
    throw e;
  }
}