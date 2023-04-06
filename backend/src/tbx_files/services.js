const axios = require('axios')
const API_URL = 'https://echo-serv.tbxnet.com'
const API_KEY = 'aSuperSecretKey'

exports.getFilesList = async () => {
  const response = await axios.get(`${API_URL}/v1/secret/files`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  })
  return response.data
}

exports.getFileData = async (fileName) => {
  try {
    const response = await axios.get(`${API_URL}/v1/secret/file/${fileName}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
    return response.data || ''
  } catch (err) {
    ;
    return null
  }
}
