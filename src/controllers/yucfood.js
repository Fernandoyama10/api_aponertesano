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

  exports.getFoodRecord = async (req, res) => {
    try{ 
      
      mysqlConnection.query("SELECT * from meal_record WHERE date_r = ? and id_user = ? ", [req.params.date_r, req.params.id_user], (err, rows, fields) => {
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


  
  exports.getCaloriesRecord = async (req, res) => {
    try{ 
      mysqlConnection.query("SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, SUM(sodium) as sodium from meal_record WHERE date_r = ? and  id_user = ? ", [req.params.date_r, req.params.id_user], (err, rows, fields) => {
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