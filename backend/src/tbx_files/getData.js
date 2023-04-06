const { getFilesList, getFileData } = require('./services')
const { mapCSV } = require('./mapCSV')

/**
 * Retrieves all files and their data from the external API.
 *
 * @returns {Promise<Array>} An array of file objects with their respective data.
 */
const getAll = async () => {
  const { files } = await getFilesList()
  if (!files) return []
  const filesData = await Promise.all(
    files.map(async (fileName) => {
      const fileData = await getFileData(fileName)
      if (!fileData) return null
      return mapCSV(fileName, fileData)
    })
  )
  const cleanList = filesData.filter((content) => content !== null)
  return cleanList
}

/**
 * Retrieves a single file and its data from the external API.
 *
 * @param {string} fileName - The name of the file to retrieve.
 * @returns {Promise<Object>} An object containing the file's data.
 */
const getOne = async (fileName) => {
  const fileData = await getFileData(fileName)
  return mapCSV(fileName, fileData)
}

/**
 * Retrieves data for either a single file or all files, depending on the query parameters.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.getData = async (req, res) => {
  try {
    const { fileName } = req.query
    const rtrn = typeof fileName === 'string' && fileName.endsWith('.csv')
      ? await getOne(fileName)
      : await getAll()

    res.json(rtrn)
  } catch (err) {
    res.status(500).json({ message: 'Error trying to getData', err })
  }
}
