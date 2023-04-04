// services.test.js
const axios = require('axios');
const { getFilesList, getFileData } = require('../services');

jest.mock('axios');

describe('services', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getFilesList', () => {
    it('should fetch the list of files', async () => {
      const mockData = { files: ['file1.csv', 'file2.csv'] };
      axios.get.mockResolvedValue({ data: mockData });

      const files = await getFilesList();
      expect(files).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/v1/secret/files`, {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });
    });
  });

  describe('getFileData', () => {
    it('should fetch the file data and parse it', async () => {
      const mockData = 'value1,value2\nvalue3,value4';
      axios.get.mockResolvedValue({ data: mockData });

      const fileName = 'file1.csv';
      const fileData = await getFileData(fileName);

      expect(fileData).toEqual([
        ['value1', 'value2'],
        ['value3', 'value4'],
      ]);
      expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/v1/secret/file/${fileName}`, {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });
    });

    it('should return null and log error if request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValue(error);

      const fileName = 'file1.csv';
      const fileData = await getFileData(fileName);

      expect(fileData).toBeNull();
    });
  });
});
