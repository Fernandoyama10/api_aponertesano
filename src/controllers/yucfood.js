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


exports.addyucafood = async (req, res) => {
  const { food_name, image, tipo, quantity, calories, protein, fat, carbs, sugar, sodium } = req.body;
  mysqlConnection.query('INSERT INTO yucatan_food set ?', {food_name:food_name, image:image, tipo: tipo, quantity:quantity, calories:calories, protein:protein, fat:fat, carbs:carbs, sugar:sugar, sodium:sodium}, (error, resultado) => {
    if (error) {
      res.send({ message: "Error en el registro", statusCode: 400 });
      res.json(error);
    } else {
      res.json(resultado);
      console.log('Se agrego el registro');
    }
  })
}


exports.deleteyucafood = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('DELETE from yucatan_food WHERE  ?', [params], (error, resultado) => {
    if (error) {
      res.send({ message: "Error en el registro", statusCode: 400 });
      res.json(error);
    }
    else {
      res.json(resultado);
      console.log('Se elimino el registro');
    }
  })
}
