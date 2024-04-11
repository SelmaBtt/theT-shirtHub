const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("You are currently in the default hub of the T-shirt Hub")
})

app.get('/getMsg', (req, res) => {
    res.send("Hello World")
})


app.listen(3001, () => {
    console.log("Server running on port 3001");
});