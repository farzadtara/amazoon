const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name: { type: String, require: true, unique: true },
    about: String,
    photo: String
});
module.exports = mongoose.model("owner", ownerSchema);