const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
  },
  preferences: {
    bitrate: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    favoriteArtists: [String],
  },
  downloadHistory: [
    {
      trackId: String,
      timestamp: Date,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;