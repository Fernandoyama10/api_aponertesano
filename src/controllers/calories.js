const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.caloriesdata = async (req, res) => {
    try{ 
        mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, SUM(sodium) as sodium, initial_calories FROM meal_record as M join calories_result as C ON M.id_user = C.id_user and M.date_r = C.date WHERE M.date_r = ? and  C.id_user = ?', [req.params.date_r, req.params.id_user], (err, rows, fields) => {
          if (!err) {
            res.send(rows);
          } else {
            console.log(err);
          }
        });

    }catch(e){
        throw e;
    }
    
  }


  exports.caloriesget = async (req, res) => {
    try {
      const params = req.params;

      mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, initial_calories FROM meal_record WHERE date_r = "2021-11-09" and ?', [params], (err, rows, fields) => {
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