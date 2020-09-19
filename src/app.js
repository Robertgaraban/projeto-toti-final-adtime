const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnecton = require('express-myconnection');


const app = express();


//. settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: ' ',
    port: 3306,
    database: 'crudnodejsmysql',

}, 'single'));


app.listen(app.set('port'), () => {
    console.log('Server on port 3000');
});