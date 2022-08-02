const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
var url = require('url');
var urlObject = url.parse('http://localhost:3000/path/abc.php?id=student&page=12#hash');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

const data = fs.readFileSync('./config/database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

app.get('/api/memberList', (req, res) => {
    console.log('/api');
    connection.query('select * from member', (err, data) => {
        res.send(data);
    })
})

var requestData = function (req, res, next) {
    req.requestData = req.body;
    next();
}

app.use(requestData)

app.post('/memberView/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const sql = `select * from member where id=${id};`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/memberWrite', (req, res, next) => {
    console.log(req.requestData);
    const name = req.requestData.name;
    const age = req.requestData.age;
    const sex = req.requestData.sex;
    const birth = req.requestData.birth;
    const height = req.requestData.height;
    const weight = req.requestData.weight;
    const regDate = req.requestData.regDate;
    const endDate = req.requestData.endDate;
    const phone = req.requestData.phone;
    const email = req.requestData.email;
    const sql = `insert into member (name,age,sex,birth,height,weight,regDate,endDate,phone,email) values ('${name}','${age}','${sex}','${birth}','${height}','${weight}','${regDate}','${endDate}','${phone}','${email}');`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    })
})

app.post("/api/search/:searchText", (req, res) => {
    console.log(req.params.searchText);
    const text = req.params.searchText;
    const sql = `select * from member where name like '%${text}%'`
    connection.query(sql, async (err, data) => {
        if (!err) {
            res.send({ searchData: data })
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/member/:id&/:password&/:name&/:email&/:phone&/:addr', (req, res, next) => {
    console.log("member");
    console.log(req.params.id);
    console.log(req.params.password);
    console.log(req.params.name);
    console.log(req.params.email);
    console.log(req.params.phone);
    console.log(req.params.addr);
    const id = req.params.id;
    const password = req.params.password;
    const name = req.params.name;
    const email = req.params.email;
    const phone = req.params.phone;
    const addr = req.params.addr;
    const sql = `insert into member values('${id}','${password}','${name}','${email}','${phone}','${addr}');`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send()
        } else {
            console.log(err)
        }
    })
})

app.post('/api/login/:id&/:password', (req, res, next) => {
    const id = req.params.id;
    const password = req.params.password;
    console.log(id, password);
    const sql = `select id,password from member where id='${id}' and password='${password}'`;
    connection.query(sql, (err, data) => {
        console.log(sql);
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})