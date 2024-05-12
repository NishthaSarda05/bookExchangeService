import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  price: {
    raw: { type: Number },
    formatted: { type: String },
    formatted_with_symbol: { type: String },
    formatted_with_code: { type: String },
    },
  media: {
    type: { type: String },
    source: { type: String },
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


module.exports = mongoose.model("Book", BookSchema);