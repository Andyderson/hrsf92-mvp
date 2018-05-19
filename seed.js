const fs = require('fs');
const mongodb = require('./database/mongo.js');
const data = require('./data.json');

const insertAllergyData = () => {
    fs.readFile('./data.json', (error, data) => {
        if (error) {
            console.log('Seeding error', error);
        } else {
            console.log('Seeding success');
            const mongoData = JSON.parse(data);
            mongodb.Allergy.create(mongoData);
        }
    });
};

insertAllergyData(data);