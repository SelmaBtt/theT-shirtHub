require('dotenv').config();
const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const validation = require('./Middlewares/validationMiddleware');
const userSchema = require('./validations/userValidation')

// Connecting to database 
// const db = mysql.createPool({
//     user: 'root',
//     host: 'localhost',
//     password: '1468Skxb',
//     database: 'thubdb',
//     port: 3306
// });

const db = mysql.createPool({
    user: process.env.API_USER,
    host: process.env.API_HOST,
    password: process.env.API_PASS,
    database: process.env.API_DB,
    port: process.env.API_PORT
});

db.getConnection((err, conn) => {
    if (err) {
        console.error('error db', err.code)
    } else {
        console.log('db conn successful')
        conn.release();
    }
})

app.use(express.json());
app.use(cors());


// Handeling data from the products table -------------------------------------

// GET request ALL
app.get('/products', (req, res) => {
    db.query("SELECT * FROM products ORDER BY title", (err, result) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(result);
        }
    })
})

// GET request SPECIFIC
app.get('/products/:id', (req, res) => {
    const productID = req.params.id;
    db.query(`SELECT * FROM products WHERE productid = ${productID}`, (err, result) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(result);
        }
    })
})

// ----------------------------------------------------------------------------

// Handeling data from order table --------------------------------------------

// POST request
app.post('/orders', (req, res) => {
    const { orderId, orderTitle, price} = req.body
    db.query("INSERT INTO orders (orderId, orderTitle, price) VALUES (?, ?, ?) ",
        [orderId, orderTitle, price],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else{
                return res.status(200).json(result);
            }
        }
    )
})

// GET request (not used any longer)
// app.get('/orders', (req, res) => {
//     db.query("SELECT * FROM orders", (err, result) => {
//         if (err) {
//             res.status(400).json(err);
//         } else {
//             res.status(200).json(result);
//         }
//     })
// })

// DELETE an order (not used any longer)
// app.delete('/orders/:id', (req, res) => {
//     const id = req.params.id
//     db.query(`DELETE FROM orders WHERE orderId = ${id};`, (err, result) => {
//         if (err) {
//             res.status(400).json(err);
//         } else {
//             res.status(200).json(result);
//         }
//     })
// })

// Handeling data from users/log in -------------------------------------------

// Handeling data from the users table ----------------------------------------

// POST request to log in

app.post('/logIn', (req, res) => {
    const { mail, password } = req.body;
    db.query("SELECT * FROM users WHERE mail = ? AND password = ?;", 
    [mail, password],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
            console.log(err)
        } 

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.send({ message: "Invalid email or/and password. Try again" })
        }
        
    })
})

// POST request to create account
app.post('/users', validation(userSchema), (req, res) => {
    const { fname, lname, mail, password } = req.body;
    db.query(
        "INSERT INTO users (fname, lname, mail, password) VALUES (?, ?, ?, ?)", 
        [fname, lname, mail, password], 
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else{
                return res.status(200).json(result);
            }
    });
});

//------------------------------------------------------------------------------


app.listen(3001, () => {
    console.log("Server running on port 3001");
});

module.exports = app;