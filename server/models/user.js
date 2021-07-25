const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: String,
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" }
});

module.exports = mongoose.model("user", userSchema);

