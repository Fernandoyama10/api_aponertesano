exports.caloriesdata = async (req, res) => {
    const params = req.params;
    mysqlConnection.query('SELECT SUM(calories) as calories, SUM(protein) as protein, SUM(fat) as fat, SUM(carbs) as carbs, SUM(sugar) as sugar FROM meal_record WHERE date_r = "2021-11-09" and id_user = 85', [params], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  }