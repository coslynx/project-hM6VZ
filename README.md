# Telegram FLAC Music Downloader

## Project Overview

This project aims to build a Telegram bot that allows users to search for and download high-quality FLAC music files directly within their Telegram chats. 

**Key Features:**

* **Seamless Telegram Integration:**  Interact with the bot directly through your Telegram chat.
* **Spotify Music Search:**  Search for music by artist, album, or song title using Spotify's vast library.
* **FLAC Audio Downloads:** Download music in the lossless FLAC format for the best possible audio quality.
* **Direct File Delivery:** Receive downloaded FLAC files directly in your Telegram chat.
* **Optional Database Integration:** (MongoDB) Store user preferences, download history, and potentially enable personalized recommendations.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/telegram-flac-downloader.git
   ```

2. **Install Dependencies:**
   ```bash
   cd telegram-flac-downloader
   npm install
   ```

3. **Create a Telegram Bot:**
   * Go to [https://core.telegram.org/bots#botfather](https://core.telegram.org/bots#botfather) and chat with the BotFather.
   * Type `/newbot` and follow the instructions to create a new bot and receive its token.

4. **Set Up Environment Variables:**
   * Create a `.env` file in the project root.
   * Add the following environment variables:
     ```
     TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN
     SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
     SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
     MONGO_URI=mongodb://localhost:27017/your-database-name 
     ```
     * Replace `YOUR_BOT_TOKEN`, `YOUR_SPOTIFY_CLIENT_ID`, and `YOUR_SPOTIFY_CLIENT_SECRET` with your actual values.
     * The `MONGO_URI` is optional for database integration.

## Usage

1. **Start the Bot:**
   ```bash
   npm start
   ```

2. **Interact with the Bot:**
   * Open Telegram and find your newly created bot.
   * Send a search query using the `/search` command. For example: `/search artist:The Beatles`
   * The bot will display a list of search results.
   * Choose a track from the list and send the `/download` command with the track ID. For example: `/download track_id:spotify:track:3E212J8L2q6zO97e2lS6oZ`. 
   * The bot will download the FLAC file and send it to your Telegram chat.

## Hosting

You can host the bot on various platforms, such as:

* **Heroku:**
   * Create a new Heroku app.
   * Configure the environment variables (similar to the local `.env` file).
   * Deploy the code using `git push heroku master` or `git push heroku main` (depending on your branch).

* **Other Cloud Platforms:** Explore other cloud platforms like AWS, Google Cloud, or DigitalOcean for hosting.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository:** Create a fork of the repository on GitHub.
2. **Create a Branch:** Create a new branch for your changes.
3. **Make Changes:** Implement your improvements or bug fixes.
4. **Commit Changes:** Commit your changes with clear and concise commit messages.
5. **Push to Your Fork:** Push your changes to your forked repository.
6. **Create a Pull Request:** Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

* Telegram Bot API ([https://core.telegram.org/bots/api](https://core.telegram.org/bots/api))
* Spotify Web API ([https://developer.spotify.com/documentation/web-api/](https://developer.spotify.com/documentation/web-api/))
* MongoDB ([https://www.mongodb.com/](https://www.mongodb.com/))

## Disclaimer

This project is for educational purposes only. The bot's functionality relies on third-party APIs and services, and it's important to use them responsibly and within their terms of service. It's essential to be aware of copyright laws and ensure that downloaded music files are obtained legally.