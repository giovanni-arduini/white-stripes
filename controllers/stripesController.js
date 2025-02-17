const connection = require('../data/db')

function index(req, res){
//recupero tutti i parcheggi

let sql = "SELECT * FROM parcheggi"

connection.query(sql, (err, stripes) => {
    console.log(stripes);
    if (err) return res.status(500).json({message: err.message})
    
    res.json(stripes)
})
}

function show (req, res) {
//recupero un singolo parcheggio con le sue info
res.json({message:"singola striscia",})
}

module.exports ={index, show}