const { getData } = require('../getData');
const { getFilesList, getFileData } = require('../services');
const { mapCSV } = require('../mapCSV');

jest.mock('../services');
jest.mock('../mapCSV');

describe('getData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const getAll = async () => {
    const { files } = await getFilesList();
    if (!files) return [];
    const filesData = await Promise.all(
      files.map(async (fileName) => {
        const fileData = await getFileData(fileName);
        if (!fileData) return null;
        return mapCSV(fileName, fileData);
      })
    );
    const cleanList = filesData.filter((content) => content !== null);
    return cleanList;
  };

  const getOne = async (fileName) => {
    const fileData = await getFileData(fileName);
    return mapCSV(fileName, fileData);
  };

  it('should return all files data if no fileName query parameter is provided', async () => {
    const mockFiles = ['file1.csv', 'file2.csv'];
    const mockFileData = [['value1', 'value2'], ['value3', 'value4']];
    const mockMappedData = { key: 'value' };

    getFilesList.mockResolvedValue({ files: mockFiles });
    getFileData.mockResolvedValue(mockFileData);
    mapCSV.mockReturnValue(mockMappedData);

    const req = { query: {} };
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await getData(req, res);

    expect(getFilesList).toHaveBeenCalled();
    expect(getFileData).toHaveBeenCalledTimes(2);
    expect(mapCSV).toHaveBeenCalledTimes(2);
    expect(res.json).toHaveBeenCalledWith([mockMappedData, mockMappedData]);
  });

  it('should return a single file data if fileName query parameter is provided', async () => {
    const mockFileName = 'file1.csv';
    const mockFileData = [['value1', 'value2'], ['value3', 'value4']];
    const mockMappedData = { key: 'value' };

    getFileData.mockResolvedValue(mockFileData);
    mapCSV.mockReturnValue(mockMappedData);

    const req = { query: { fileName: mockFileName } };
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await getData(req, res);

    expect(getFileData).toHaveBeenCalledWith(mockFileName);
    expect(mapCSV).toHaveBeenCalledWith(mockFileName, mockFileData);
    expect(res.json).toHaveBeenCalledWith(mockMappedData);
  });

  it('should return a 500 error if an error occurs', async () => {
    getFilesList.mockRejectedValue(new Error('Internal Server Error'));

    const req = { query: {} };
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await getData(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
