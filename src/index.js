const { bot } = require('./bot');
const config = require('./config');

// Database integration (optional)
// const User = require('./database/models/User');

// Start the bot
bot.launch().then(() => {
  console.log('Telegram FLAC Music Downloader bot started successfully!');
});

// Handle errors
bot.catch((error) => {
  console.error('Bot encountered an error:', error);
});

// Gracefully shut down the bot on SIGINT (Ctrl+C)
process.once('SIGINT', () => {
  bot.stop('SIGINT received. Shutting down Telegram bot...');
});

// Gracefully shut down the bot on SIGTERM (kill)
process.once('SIGTERM', () => {
  bot.stop('SIGTERM received. Shutting down Telegram bot...');
});