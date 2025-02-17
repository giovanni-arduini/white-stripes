const connection = require("../data/db")

function showUser(req, res) {
    // recupera un utente e le sue segnalazioni di parcheggi
    const userId = parseInt(req.params.id);
    let sql = `SELECT * FROM utenti WHERE id = ?`;

    connection.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Utente non trovato' });

        const user = results[0];
        console.log(user);

        sql = `SELECT * FROM parcheggi WHERE id_utente = ? ORDER BY data_creazione DESC`;
        connection.query(sql, [userId], (err, results) => {
            if (err) return res.status(500).json({ message: err.message });
            user.spots = results;

            res.json(user);
            console.log(user);
        });
    });
}



module.exports = {showUser}