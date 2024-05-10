import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  username: {type: mongoose.Schema.Types.ObjectId,ref: "User"},  
  OrderDetail: [
    {
      oderID: { type: String, required: true, unique: true },
      date: {type: String, required: true},
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      title: {type: String, ref: "Book"},
      status: { type: String, enum: ["owned", "wanted", "returned"] },
    },
],
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;