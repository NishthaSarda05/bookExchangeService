import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      title: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    },
  ],
});

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
