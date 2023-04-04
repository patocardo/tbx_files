const axios = require('axios');
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

exports.getFilesList = async () => {
  
  const response = await axios.get(`${API_URL}/v1/secret/files`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

exports.getFileData = async (fileName) => {
  try {
    const response = await axios.get(`${API_URL}/v1/secret/file/${fileName}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.split('\n').map((line) => line.split(','));
  } catch (err) {;
    return null;
  }
};

