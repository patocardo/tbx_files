const API_URL = 'http://localhost:3001';

export const getServerFilesList = async () => {
  try {
    const response = await fetch(`${API_URL}/files/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getServerFileDetail = async (filename) => {
  try {
    const response = await fetch(`${API_URL}/files/data?fileName=${encodeURIComponent(filename)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

