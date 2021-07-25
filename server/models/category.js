const mongoose = require('mongoose');
const { schema } = require('./product');
const Schema = mongoose.Schema;



const categorySchema = new Schema({
    title: { type: String, require: true, unique: true }
});


module.exports = mongoose.model("category", categorySchema);