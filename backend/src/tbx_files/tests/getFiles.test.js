// getFiles.test.js
const { getFiles } = require('../getFiles')
const { getFilesList } = require('../services')

jest.mock('../services')

describe('getFiles', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return a list of files on success', async () => {
    const mockFiles = ['file1.csv', 'file2.csv']
    getFilesList.mockResolvedValue({ files: mockFiles })

    const req = {}
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn()
    }

    await getFiles(req, res)

    expect(getFilesList).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith(mockFiles)
  })

  it('should return a 500 error on failure', async () => {
    getFilesList.mockRejectedValue(new Error('Internal Server Error'))

    const req = {}
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn()
    }

    await getFiles(req, res)

    expect(getFilesList).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith('Internal Server Error')
  })
})
