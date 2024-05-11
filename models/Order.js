import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  username: {type: String, required: true, ref: "User"},  
  orderDetails: [
    {
      oderID: { type: String, required: true, unique: true },
      date: {type: String, required: true},
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
      name: {type: String, ref: "Books"},
      status: { type: String, enum: ["owned", "wanted", "returned"] },
      imageUrl: {type: String}
    },
],
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;