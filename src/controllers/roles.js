const mysqlConnection = require('../database');
const mysql = require("mysql");
const { request } = require('../../app');
const app = require('../../app');
const e = require('express');

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
  const { role_name } = req.body;
  mysqlConnection.query('INSERT INTO roles set ?', { role_name: role_name }, (error, resultado) => {
    if (error) {
      res.send({ message: "Error en el REGISTRO", statusCode: 400 });
      res.json(error);
    } else {
      res.json(resultado);
      console.log('Se agrego el registro');
    }
  })
}

exports.deleterol = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('DELETE from roles WHERE  ?', [params], (error, resultado) => {
    if (error) {
      res.send({ message: "Error al ELIMINAR ", statusCode: 400 });
      res.json(error);
    }
    else {
      res.json(resultado);
      console.log('Se elimino el registro');
    }
  })
}

exports.updateroles = async (req, res) => {
  const { role_name } = req.body;
  const {id_role} = req.params;
  mysqlConnection.query('UPDATE roles SET ? WHERE id_role = ?', [{role_name}, id_role] , (error, resultado) => {
    if (error) {
      res.send({ message: "Error en ACTUALIZAR", statusCode: 400 });
      res.json(error);
    } else {
      res.json(resultado);
      console.log('Se actualizo el registro');
    }
  })
}