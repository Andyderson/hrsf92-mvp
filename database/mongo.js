const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Aversion');

const db = mongoose.connection;

const allergySchema = mongoose.Schema({
    id: { type: Number, require: true, unique: true },
    name: String,
    description: String,
})

const Allergy = mongoose.model('Allergy', allergySchema);

module.exports.Allergy = Allergy;
module.exports.db = db;