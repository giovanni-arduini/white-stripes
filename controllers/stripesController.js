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
const id = parseInt(req.params.id)
let sql = `SELECT * FROM parcheggi WHERE id = ${id}`

connection.query(sql, [id], (err, stripe) => {
    
    if (err) return res.status(500).json({message: err.message})
    if(stripe.length === 0) return res.status(404).json({message: "Parcheggio non trovato"})

    res.json(stripe)
})
}


function store (req, res) {
// segnala un nuovo parcheggio


const {latitudine, longitudine, descrizione, id_utente} = req.body;

console.log(latitudine, longitudine, descrizione);

const sql = `INSERT INTO parkings (latitude, longitude, description, user_id) VALUES (?, ?, ?, ?)`

connection.query(sql, [latitudine, longitudine, descrizione, id_utente], (err, results) =>{
if(err) return res.status(500).json({message: err.message})
    res.status(2010).json({message: "parcheggio aggiunto", id: results.insertId})
}
)
}

module.exports ={index, show, store}