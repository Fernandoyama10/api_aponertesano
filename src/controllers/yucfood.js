const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.getyucfood = async (req, res) => {
  mysqlConnection.query('SELECT * FROM RESPONSESSMS', (err, rows, fields) => {
    if (!err) {

      res.json(rows);
    } else {
      console.log(err);
    }
  });
}

exports.getyucfoodName = async (req, res) => {

  try {
    const { clienteID } = req.params;
    const { type, reference, number, message, response, send_date, response_date } = req.body;
    if (type === 'response') {
      mysqlConnection.query('INSERT INTO RESPONSESSMS SET ?', { ClienteID: clienteID, Reference: reference, Number: number, Message: message, Response: response, Send_date: send_date, Response_date: response_date }, (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
    }

  } catch (e) {
    throw e;
  }

}

exports.getFoodRecord = async (req, res) => {
  try {

    mysqlConnection.query("SELECT * from meal_record WHERE date_r = ? and id_user = ? ", [req.params.date_r, req.params.id_user], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });

  } catch (e) {
    throw e;
  }
}



exports.getCaloriesRecord = async (req, res) => {
  try {
    mysqlConnection.query("SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, SUM(sodium) as sodium, initial_calories, C.id_status, name_status FROM meal_record as M join calories_result as C ON M.id_user = C.id_user and M.date_r = C.date join status as S ON S.id_status = C.id_status WHERE C.date = ? and M.id_user = ? ", [req.params.date_r, req.params.id_user], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });

  } catch (e) {
    throw e;
  }
}




exports.deleteFood = async (req, res) => {
  try {
    mysqlConnection.query("DELETE FROM meal_record where id_meal = ? ", [req.params.id_meal], (err, results, fields) => {
      if (err) {
        res.send({ message: "Error en el registroo", statusCode: 400 });
      } else {
        res.send(results);
        console.log('Se borro el dato');
      }

    });

  } catch (e) {
    throw e;
  }
}

exports.deleteCalories = async (req, res) => {
  try {
    const { calories, id_user, date } = req.body;
    mysqlConnection.query('UPDATE calories_result SET final_calories = (final_calories - ?) WHERE id_user = ? and date = ?', [calories, id_user, date], (error, results) => {
      if (error) {
        res.send({ message: "Error en el registro", statusCode: 400 });
      } else {
        if (results.changedRows > 0) {
          res.send(results);
          console.log('Se eliminaron los resultados');
        } else {
          res.send({ message: "Error en el registro", statusCode: 400 });
          console.log('Error no se elimino');
        }
      }
    });

  } catch (e) {
    throw e;
  }
}

