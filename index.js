// require('dotenv').config()
// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/twitter', (req, res) => {
//     res.send('harshildotcom')
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Please login at mongodb </h1>')
// })

// app.get('/youtube', (req, res) => {
//     res.send('<h2>Please login at youtube </h2>')
// })

// app.listen(process.env.PORT, () => {
//     console.log(`example app listening on port ${port}`);

// })
const mysql = require('mysql2');

const con = mysql.createConnection({
    hostname: 'root@localhost:3306',
    user: 'root',
    password: 'H@rshil25!',
    insecureAuth: true,
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err
    console.log("Connected!");
    const sql = "INSERT INTO customers (name, address) VALUES ?";

    const values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
});

