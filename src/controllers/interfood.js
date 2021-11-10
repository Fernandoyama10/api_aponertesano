const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.registerfood = async (req, res) => {
    try {
      const { date_r, time, label, image, yield, calories, protein, fat, carbs, sugar, sodium, id_user } = req.body;
      mysqlConnection.query('INSERT INTO meal_record set ?', { date_r: date_r, time: time, label: label, image: image, yield: yield, calories: calories, protein: protein, fat: fat, carbs: carbs, sugar: sugar, sodium: sodium, id_user: id_user  }, (error, resultado) => {
        if (error) {
          res.send({ message: "Error en el registro", statusCode: 400 });
        } else {
            res.send(resultado);
          mysqlConnection.query('UPDATE calories_result SET final_calories = ? WHERE id_user = ?', [calories, id_user], (error, results) => {
            if (error) {
              res.send({ message: "Error en la Calories Result", statusCode: 400 });
            } else {
              console.log('Se registro totalmente');
            }
          });
  
        }
      });
    } catch (e) {
      throw e;
    }
  }
