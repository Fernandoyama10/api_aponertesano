const express = require('express');
const app = express();
var cors = require('cors');
// Settings
var userRouter = require('./src/routes/users.js');
var yucfoodRouter = require('./src/routes/yucfood.js');
var interfoodRouter = require('./src/routes/interfood.js');
var caloriesfoodRouter = require('./src/routes/calories.js');

// Middlewares temas de los cors
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.use('/api', userRouter);
app.use('/response', yucfoodRouter);
app.use('/apinterfood', interfoodRouter);
app.use('/apicalories', caloriesfoodRouter);


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;