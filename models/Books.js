import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema({
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
});

const Books = mongoose.model('Books', BooksSchema);
export default Books;
