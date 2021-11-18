const mysqlConnection = require('../database');
const mysql = require("mysql");

exports.getusers = async (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}



exports.getByID = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('SELECT * FROM users WHERE ?', [params], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
}

exports.getByInfoUserID = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('SELECT * FROM infouser WHERE ?', [params], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}

exports.logindata = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('SELECT U.id_user, U.email, U.password, U.id_role, I.name, I.surname, I.age, I.weight, I.gender, I.height, A.name_level, A.value_level, I.fb_complete  FROM infouser I , level_activity A, users U where A.id_activity = I.id_activity AND I.id_user = U.id_user AND ?', [params], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
}


exports.refreshdata = async (req, res) => {
  const params = req.params;
  mysqlConnection.query('SELECT U.id_user, U.email, U.password, U.id_role, I.name, I.surname, I.age, I.weight, I.gender, I.height, A.name_level, A.value_level, I.fb_complete  FROM infouser I , level_activity A, users U where A.id_activity = I.id_activity AND I.id_user = U.id_user AND ?', [params], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
}


exports.login = async (req, res) => {
  try {
    const params = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE ?', [params], (err, rows, fields) => {
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

exports.register = async (req, res) => {
  try {
    const { email, password, id_role, name, surname, weight, age, gender, height, id_activity, fb_complete } = req.body;
    mysqlConnection.query('INSERT INTO users set ?', { email: email, password: password, id_role: id_role }, (error, resultado) => {
      if (error) {
        res.send({ message: "Ya existe el usuario o existe un error", statusCode: 400 });
      } else {
        res.send(resultado);
        mysqlConnection.query('INSERT INTO infouser set ?', { name: name, surname: surname, weight: weight, age: age, gender: gender, height: height, id_activity: id_activity, id_user: resultado.insertId, fb_complete: fb_complete }, (error, results) => {
          if (error) {
            res.send({ message: "Error en la Info de Usuario", statusCode: 400 });
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


exports.update = async (req, res) => {
  try {
    const { name, surname, age ,weight, gender, height, id_activity, id_user } = req.body;
    mysqlConnection.query('UPDATE infouser SET name = ?, surname = ?, age = ?, weight = ?, gender = ?, height = ?, id_activity = ? WHERE id_user = ?;', 
    [name, surname, age ,weight, gender, height, id_activity, id_user], (error, resultado) => {
      if (error) {
        console.log(error);
        res.send({ message: "Error para actualizar tus datos", statusCode: 400 });
      } else {
        
        mysqlConnection.query('SELECT U.id_user, U.email, U.password, U.id_role, I.name, I.surname, I.age, I.weight, I.gender, I.height, A.name_level, A.value_level, I.fb_complete FROM infouser I , level_activity A, users U where A.id_activity = I.id_activity AND I.id_user = U.id_user AND name = ? and surname = ?', [name, surname], (err, rows, fields) => {
          if (!err) {
            res.send(rows);
          } else {
            console.log(err);
            res.send({ message: "Error para actualizar tus datos y buscarlos verifique", statusCode: 400 });
          }
        });
        //res.send(resultado);
      }
    });
  } catch (e) {
    throw e;
  }
}


exports.savefeedback = async (req, res) => {
  try {
    const { value_feed, id_user, fb_complete } = req.body;
    mysqlConnection.query('INSERT INTO feedback set ?', { value_feed: value_feed, id_user: id_user }, (error, resultado) => {
      if (error) {
        res.send({ message: "No se registro error", statusCode: 400 });
      } else {
        mysqlConnection.query('UPDATE infouser SET fb_complete = ? WHERE id_user = ?', [fb_complete, id_user], (error, results) => {
          if (error) {
              res.send({ message: "Error en el registro", statusCode: 400 });
          } else {
            mysqlConnection.query('SELECT U.id_user, U.email, U.password, U.id_role, I.name, I.surname, I.age, I.weight, I.gender, I.height, A.name_level, A.value_level, I.fb_complete  FROM infouser I , level_activity A, users U where A.id_activity = I.id_activity AND I.id_user = U.id_user AND I.id_user = ?', [id_user], (err, rows, fields) => {
              if (!err) {
                res.send(rows);
              } else {
                console.log(err);
                res.send({ message: "Error para actualizar tus datos y buscarlos verifique", statusCode: 400 });
              }
            });
          }
      });

      }
    });
  } catch (e) {
    throw e;
  }
}
