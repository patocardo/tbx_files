const { getFilesList } = require('./services');

exports.getFiles = async (req, res) => {
  try {
    const { files } = await getFilesList();
    res.json(files || []);
  } catch (err) {
    // console.error(err);
    res.status(500).send('Internal Server Error');
  }
};