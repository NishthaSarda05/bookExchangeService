import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteGenres: [{ type: String }],
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      status: { type: String, enum: ["owned", "wanted"] },
    },
  ],
});

const User = mongoose.model('User', UserSchema);
export default User;