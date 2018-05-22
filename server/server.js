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
  const query = req.query.query;
  mongodb.Allergy.find({ name: { $regex: query, $options: 'i' } }, (error, data) => {
    if (error) {
      console.log('Express Result Get Error', error);
    } else {
      console.log('Express Result Get Success', data);
      res.send(data);
    }
  });
});

app.get('/description', (req, res) => {
  const query = req.query.query;
  mongodb.Allergy.find({ description: { $regex: query, $options: 'i' } }, (error, data) => {
    if (error) {
      console.log('Express Description Get Error', error);
    } else {
      console.log('Express Description Get Success', data);
      res.send(data);
    }
  });
});

app.post('/results', (req, res) => {

});

app.listen(port, () => {
  console.log(`Serving up application on port: ${port}`);
});
