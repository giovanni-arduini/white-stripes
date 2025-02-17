const connection = require('../data/db')

function index(req, res){
//recupero tutti i parcheggi
res.json({message:"tutte le strisce",})
}

function show (req, res) {
//recupero un singolo parcheggio con le sue info
res.json({message:"singola striscia",})
}

module.exports ={index, show}