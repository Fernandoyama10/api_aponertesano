const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.getyucfood = async (req, res) => {
<<<<<<< Updated upstream
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
      res.send({ message: "Error al REGISTRAR", statusCode: 400 });
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
      res.send({ message: "Error al ELIMINAR", statusCode: 400 });
      res.json(error);
    }
    else {
      res.json(resultado);
      console.log('Se elimino el registro');
    }
  })
}


exports.updateyucafood = async (req, res) => {
  const {food_name, image, tipo, quantity, calories, protein, fat, carbs, sugar, sodium } = req.body;
  const {id_yucatan_food} = req.params;
  mysqlConnection.query('UPDATE yucatan_food SET ? WHERE id_yucatan_food = ?', [{food_name, image, tipo, quantity, calories, protein, fat, carbs, sugar, sodium }, id_yucatan_food] , (error, resultado) => {
    if (error) {
      res.send({ message: "Error al ACTUALIZAR", statusCode: 400 });
      res.json(error);
    } else {
      res.json(resultado);
      console.log('Se actualizo el registro');
    }
  })
}
=======
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
      mysqlConnection.query("SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar, SUM(sodium) as sodium, initial_calories from meal_record M join calories_result C ON M.id_user = C.id_user AND M.date_r = C.date WHERE C.date = ? and M.id_user = ? ", [req.params.date_r, req.params.id_user], (err, rows, fields) => {
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

    
>>>>>>> Stashed changes
