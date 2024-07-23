const fluentFfmpeg = require('fluent-ffmpeg');

/**
 * Extracts metadata from a FLAC file.
 *
 * @param {string} filePath The path to the FLAC file.
 * @returns {Promise<Object>} An object containing extracted metadata.
 */
const extractMetadata = async (filePath) => {
  return new Promise((resolve, reject) => {
    fluentFfmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        resolve(metadata.format.tags);
      }
    });
  });
};

/**
 * Embeds metadata into a FLAC file.
 *
 * @param {string} filePath The path to the FLAC file.
 * @param {Object} metadata The metadata object to embed.
 * @returns {Promise<void>} A promise that resolves when metadata embedding is complete.
 */
const embedMetadata = async (filePath, metadata) => {
  return new Promise((resolve, reject) => {
    fluentFfmpeg(filePath)
      .audioMetadata(metadata)
      .save(filePath)
      .on('error', (err) => {
        reject(err);
      })
      .on('end', () => {
        resolve();
      });
  });
};

module.exports = {
  extractMetadata,
  embedMetadata,
};