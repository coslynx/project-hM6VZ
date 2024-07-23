const Spotify = require('node-spotify-api');
const dotenv = require('dotenv');

dotenv.config();

const spotify = new Spotify({
  id: process.env.SPOTIFY_CLIENT_ID,
  secret: process.env.SPOTIFY_CLIENT_SECRET,
});

/**
 * Searches for music tracks, artists, and albums on Spotify.
 *
 * @param {string} query The search query.
 * @returns {Promise<Array<Object>>} An array of search results.
 */
const search = async (query) => {
  try {
    const results = await spotify.search({
      type: 'track,artist,album',
      query,
    });

    return results;
  } catch (error) {
    console.error('Error searching Spotify:', error);
    throw error;
  }
};

/**
 * Retrieves detailed information about a specific track.
 *
 * @param {string} trackId The Spotify track ID.
 * @returns {Promise<Object>} The track information.
 */
const getTrackInfo = async (trackId) => {
  try {
    const track = await spotify.getTrack(trackId);
    return track;
  } catch (error) {
    console.error('Error getting track info:', error);
    throw error;
  }
};

/**
 * Attempts to obtain a download link for a FLAC track.
 *
 * @param {string} trackId The Spotify track ID.
 * @returns {Promise<string>} The FLAC download link or an error message.
 */
const getDownloadLink = async (trackId) => {
  // Implement logic to obtain FLAC download links
  // This may involve:
  // - Querying third-party APIs (e.g., music archives)
  // - Using a predefined algorithm
  // - Utilizing specific music archives
  // - If a download link is unavailable, return an appropriate error message

  return '// Implement logic for obtaining FLAC download links';
};

module.exports = {
  search,
  getTrackInfo,
  getDownloadLink,
};