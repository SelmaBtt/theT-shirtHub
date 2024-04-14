const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Connecting to database 
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1468Skxb",
    database: "thubdb",
    port: 3306,
})
// if (db.state!=='disconnected'){
//     console.log("ok")
// }

app.use(express.json());
app.use(cors())


// Handeling data from the users table ----------------------------------------

// GET request
app.get('/users', (req, res) => {
    db.query("SELECT * FROM users;", (err, result) => {
        if (err) {
            res.status(400).json(err);
            console.log(err)
        } else{
            res.status(200).json(result);
        }
    })
})

// POST request
app.post('/users', (req, res) => {
    const {fname, lname, mail, password} = req.body;
    db.query(
        "INSERT INTO users (fname, lname, mail, password) VALUES (?, ?, ?, ?)", 
        [fname, lname, mail, password], 
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else{
                res.status(200).json(result);
            }
    })
})
//------------------------------------------------------------------------------


app.listen(3001, () => {
    console.log("Server running on port 3001");
});