const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.registerfood = async (req, res) => {
    try {
      const { date_r, time, label, image, quantity, calories, protein, fat, carbs, sugar, sodium, id_user, id_status } = req.body;
      mysqlConnection.query('INSERT INTO meal_record set ?', { date_r: date_r, time: time, label: label, image: image, quantity: quantity, calories: calories, protein: protein, fat: fat, carbs: carbs, sugar: sugar, sodium: sodium, id_user: id_user  }, (error, resultado) => {
        if (error) {
          res.send({ message: "Error en el registro", statusCode: 400 });
        } else {
            
          mysqlConnection.query('UPDATE calories_result SET final_calories = (final_calories + ?) WHERE id_user = ?', [calories, id_user], (error, results) => {
            if (error) {
                res.send({ message: "Error en el registro", statusCode: 400 });
            } else {
                if(results.changedRows > 0){
                    res.send(results);
                    console.log('Se creo el registro el platillo y se sumaron las calorias porque ya existian en la tabla');
                }else{
                    
                    mysqlConnection.query('INSERT INTO calories_result SET ?', { date: date_r, final_calories: calories, id_status: id_status, id_user: id_user }, (error, resultss) => {
                        if (error) {
                            res.send({ message: "Error en el registro", statusCode: 400 });
                        } else {
                            res.send(resultss);
                          console.log('Se creo el registro calories_result porque no existia y se inserto el platillo');
                        }
                      });
                }
            }
          });
  
        }
      });
    } catch (e) {
      throw e;
    }
  }
