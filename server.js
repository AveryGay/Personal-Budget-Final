const express = require('express');
const mongoose = require("mongoose");
const bodyParser= require('body-parser');
const app = express();
const cors = require("cors");
const port = 3000;
const usersModel = require('./models/usersSchema');

let url = 'mongodb://localhost:27017/FinalProjectPB';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));


app.post('/signup', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                var newUser = {
                    email: req.body.email,
                    password: req.body.password,
                };
                usersModel.insertMany(newUser)
                    .then((data) => {
                        console.log("Added");
                        res.json(data);
                        mongoose.connection.close()
                    })
                    .catch((operr) =>{
                        console.log(operr);
                    });
            })
            .catch((operr) =>{
                console.log(operr);
            });
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    console.log("Hello");
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});
