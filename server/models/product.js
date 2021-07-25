const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    owner: { type: Schema.Types.ObjectId, ref: 'owner' },
    title: String,
    description: String,
    price: Number,
    photo: String,
    stuckQuantity: Number,
    rating: [Number]
});

module.exports = mongoose.model("product", productSchema);
