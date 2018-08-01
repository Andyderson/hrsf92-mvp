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

//<<<<<<<<<<<<<<<<<<<<<<<<<< Original >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.get('/results', (req, res) => {
    let query = req.query.query;
    mongodb.Allergy.find({'name': {'$regex': query, '$options': 'i'}}, (error, data) => {
        if (error) {
            console.log('Express Result Get Error', error);
        } else {
            console.log('Express Result Get Success', data);
            res.send(data);
        }
    });
});

app.get('/description', (req, res) => {
    let query = req.query.query;
    mongodb.Allergy.find({'description': {'$regex': query, '$options': 'i'}}, (error, data) => {
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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<< Combined >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// app.get('/results', (req, res) => {
    //     let query = req.query.query;
    //     mongodb.Allergy.find({'name': {'$regex': query, '$options': 'i'}}, (error, data) => {
        //         if (error) {
            //             console.log('Express Result Get Error', error);
            //         } else {
                //             console.log('Express Result Get Success');
                //             if (data.length === 0) {
                    //                 console.log('this was empty')
                    //                 mongodb.Allergy.find({'description': {'$regex': query, '$options': 'i'}}, (error, data) => {
                        //                     if (error) {
//                         console.log('Express Description Get Error', error);
//                     } else {
//                         console.log('Express Description Get Success');
//                         res.send(data);
//                         return
//                     }
//                 });
//             }
//             res.send(data);
//         }
//     });
// });

// app.get('/results', (req, res) => {
//     let query = req.query.query;
//     mongodb.Allergy.find({'name': {'$regex': query, '$options': 'i'}}, (error, data) => {
//         if (error) {
//             console.log('Express Result Get Error', error);
//         } else {
//             console.log('Express Result Get Success', data);
//             if (data.length > 0) {
//                 console.log('Express name sent');
//                 res.send(data);
//                 } else {
//                 app.get('/results', (req, res) => {
//                     console.log('in descriptions')
//                     mongodb.Allergy.find({'description': {'$regex': query, '$options': 'i'}}, (error, data) => {
//                         if (error) {
//                             console.log('Express Description Get Error', error);
//                         } else {
//                             console.log('Express Description Get Success', data);
//                             res.send(data);
//                         }
//                     });
//                 });
//             }
//         }
//     });
// });



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Limit >>>>>>>>>>>>>>>>>>>>>>>>>>

// app.get('/results', (req, res) => {
//     let query = req.query.query;
//     mongodb.Allergy.find({'name': {'$regex': query, '$options': 'i'}})
//     .limit(10)
//     .then((data) => res.send(data));
// });

// app.get('/description', (req, res) => {
//     let query = req.query.query;
//     mongodb.Allergy.find({'description': {'$regex': query, '$options': 'i'}})
//     .limit(10)
//     .then((data) => res.send(data));
// })

app.listen(port, () => {
    console.log(`Serving up application on port: ${port}`)
});