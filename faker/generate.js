const faker = require('faker');
const fs = require('fs');

faker.locale = 'en_US';

const results = [];

const test = {};
results.push(test);
 
for (let i = 0; i < 250; i++) {
    faker.seed(i);
    const allergy = {};
    allergy.id = i; //Allergy id in database
    allergy.name = faker.company.catchPhraseNoun(); //Allergy Name
    allergy.description = faker.lorem.paragraphs(); //Allergy Description
    results.push(allergy);
}

fs.writeFile('../data.json', JSON.stringify(results), (error) => {
    if (error) {
        console.log('Generation Error', error);
    } else {
        console.log('Generation Successful!');
    }
});