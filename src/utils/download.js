const axios = require('axios');
const fs = require('fs');

/**
 * Downloads a file from a given URL to a specified location.
 *
 * @param {string} url The URL of the file to download.
 * @param {string} filePath The path to save the downloaded file.
 * @returns {Promise<string>} A promise that resolves with the path of the saved file.
 */
const downloadFile = async (url, filePath) => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        resolve(filePath);
      });

      writer.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};

module.exports = {
  downloadFile,
};