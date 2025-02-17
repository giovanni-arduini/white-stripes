const mysql = require('mysql2');

// qui passo i parametri di connessione al db
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'parkings'
})

connection.connect((err)=>{
    if(err)  throw err

    console.log('Connected to database!')
})

module.exports = connection;