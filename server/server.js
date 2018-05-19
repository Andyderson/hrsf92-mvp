const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('../database/mongo.js');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/results', (req, res) => {
    let query = req.query.query;
    mongodb.Allergy.find({'name': query}, (error, data) => {
        if (error) {
            console.log('Express Mongo Get Error', error);
        } else {
            console.log('Express Mongo Get Success', data);
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Serving up application on port: ${port}`)
});