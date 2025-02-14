function notFound(err, _, res, next){
    res.status(404);
    res.json({mesasge: err.mesasge})
}

module.exports = notFound;