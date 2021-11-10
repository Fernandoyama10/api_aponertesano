const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.caloriesdata = async (req, res) => {
    try{ 
        const { date_r, id_user } = req.body;
        console.log(date_r);
        console.log(id_user);
        mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar FROM meal_record WHERE  date_r = ? and  id_user = ? ', [date_r, id_user], (err, rows, fields) => {
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

      mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar FROM meal_record WHERE date_r = "2021-11-09" and ?', [params], (err, rows, fields) => {
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