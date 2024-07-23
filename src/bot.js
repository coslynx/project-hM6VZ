const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const spotify = require('./spotify');

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(token);

// Start message
bot.start((ctx) => {
  ctx.reply('Welcome to Telegram FLAC Music Downloader! 👋\n\nWhat would you like to do?\n\n/search - Search for music\n/help - Get help');
});

// Help command
bot.help((ctx) => {
  ctx.reply(
    'Available commands:\n\n/search - Search for music by artist, album, or song title.\n/download track_id:spotify:track:<track_id> - Download a specific track by providing its Spotify track ID.\n/help - Get a list of commands.'
  );
});

// Search command
bot.command('search', async (ctx) => {
  try {
    const query = ctx.message.text.replace('/search ', '');
    const searchResults = await spotify.search(query);

    if (searchResults.tracks.items.length > 0) {
      const tracks = searchResults.tracks.items.slice(0, 5); // Display up to 5 results

      let response = 'Search results:\n\n';
      tracks.forEach((track) => {
        response += `- **${track.name}** by ${track.artists[0].name} (${track.album.name})\n`;
        response += `  Track ID: ${track.id}\n`;
      });

      ctx.reply(response);
      ctx.reply(
        'To download a track, use the /download command followed by the track ID. For example: /download track_id:spotify:track:<track_id>'
      );
    } else {
      ctx.reply('No results found for your search query. Please try again.');
    }
  } catch (error) {
    console.error('Error searching for music:', error);
    ctx.reply('An error occurred while searching for music. Please try again later.');
  }
});

// Download command
bot.command('download', async (ctx) => {
  try {
    const trackId = ctx.message.text.replace('/download track_id:', '');
    const downloadLink = await spotify.getDownloadLink(trackId);

    if (downloadLink) {
      // Download the FLAC file (implement logic using download.js)
      // const filePath = await downloadFile(downloadLink);

      // Send the downloaded file to the user
      // ctx.replyWithDocument({ source: filePath });

      ctx.reply('Download link is not implemented yet, please check the README file for more information.');
    } else {
      ctx.reply(
        'Could not find a FLAC download link for this track. Please try a different track.'
      );
    }
  } catch (error) {
    console.error('Error downloading track:', error);
    ctx.reply('An error occurred while downloading the track. Please try again later.');
  }
});

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

// Handle menu interactions (implement menu functionality)
// ...

// Handle user commands (implement logic for other commands)
// ...