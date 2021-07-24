const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: String,
    email: { tyop: string, require: true, unique: true },
    password: { type: string, require: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" }
});

module.exports = mongoose.model("user", userSchema);