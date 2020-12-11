const express = require('express');
const mongoose = require("mongoose");
const bodyParser= require('body-parser');
const app = express();
const cors = require("cors");
const port = 4000;
const usersModel = require('./models/usersSchema');

let url = 'mongodb://localhost:27017/FinalProjectPB';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));


app.post('/signup', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                //var newUser = {
                    //email: req.body.email,
                    //password: req.body.password,
                //};
                let newUser = new usersModel ({
                    email: req.body.email,
                    password: req.body.password,
                }).save(function(err, data){
                    if(err){
                        res.send('Signed Up Failed')
                    }
                    else{
                        res.send('Signed Up Successful')
                    }
                })
            });
                
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    console.log("Hello");
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});
