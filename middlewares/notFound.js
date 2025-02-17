function notFound(err, _, res, _next){
    res.status(404);
    res.json({message: err.message,})
}

module.exports = notFound;