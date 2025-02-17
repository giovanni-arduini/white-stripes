const connection = require("../data/db")

function showUser(req, res) {
    // recupera un utente e le sue segnalazioni di parchegghi
    const userId = parseInt(req.params.id);
    let sql = `SELECT * FROM utenti WHERE id = ${userId}`;

    connection.query(sql, [userId], (err, user) => {
        if (err) return res.status(500).json({ message: err.message });
        if (user.length === 0) return res.status(404).json({ message: 'Utente non trovato' });
        res.json(user[0]);
    });
}


module.exports = {showUser}