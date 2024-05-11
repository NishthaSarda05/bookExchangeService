import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      name: { type: String, ref: "Book" },
      imageUrl: {type: String}
    },
  ],
});

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
