// models/Rating.js
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming you have user authentication
  createdAt: { type: Date, default: Date.now }
});

// module.exports = mongoose.model('Rating', ratingSchema);
const Rating = mongoose.model('Rating',ratingSchema)
// here we are exporting the model for the further use for the later on
module.exports = Rating