const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.caloriesdata = async (req, res) => {
    try{ 
      const { date_r, id_user } = req.body;
      var id_estatus = 1;
        mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, SUM(sodium) as sodium, initial_calories, C.id_status, name_status, date, M.id_user FROM meal_record as M join calories_result as C ON M.id_user = C.id_user and M.date_r = C.date join status as S ON S.id_status = C.id_status WHERE M.date_r = ? and  C.id_user = ?', [date_r, id_user], (err, rows, fields) => {
          if (!err) {
            var data = [];
            data.push(rows[0]);

           
              var calculocalorias = data[0].calories;
              console.log(calculocalorias);
              var initial_calories = data[0].initial_calories;
              var operation1 = initial_calories / 2; //vas bien
     
          //3000 / 2 = 1500
          // calorias consumidas 1200
          if(initial_calories == null){
            id_estatus = 1;
            data[0].id_estatus = id_estatus;
            data[0].name_status = "No haz registrado";
       
          }else if (initial_calories == 0 || calculocalorias <= operation1) {
            id_estatus = 2;
            data[0].id_estatus = id_estatus;
            data[0].name_status = "Vas bien";
          } else if (calculocalorias > operation1 &&
              calculocalorias < initial_calories) {
            id_estatus = 3;
            data[0].name_status = "Equilibrado";
            data[0].id_estatus = id_estatus;
          }
          if (calculocalorias > initial_calories) {
            id_estatus = 4;
            data[0].name_status = "Excedido";
            data[0].id_estatus = id_estatus;
          }
            mysqlConnection.query('UPDATE calories_result SET id_status = ? WHERE id_user = ? and date = ?', [id_estatus, id_user, date_r], (error, results) => {
              if (error) {
                  res.send({ message: "Error en el registro", statusCode: 400 });
              } else {
                  if (results.changedRows > 0) {
                    console.log('SE ACTUALIZO');
                    res.send(data);
                  } else {

                    console.log('NO SE ACTUALIZO');
                    res.send(data);
                  }
              }
          });
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
          var calories = rows.id_user + rows.id_user;  
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    } catch (e) {
      throw e;
    }
  }