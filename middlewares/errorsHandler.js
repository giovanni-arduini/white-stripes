function errorsHandler (err, _, res, _next){
res.status(500).json({message: err.message,

})    
}

module.exports = errorsHandler