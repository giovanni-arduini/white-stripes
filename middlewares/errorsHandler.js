function errorsHandler (err, _, res, next){
res.status(500)
res.json({message: err.message})    
}

module.exports = errorsHandler