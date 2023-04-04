const express = require('express');
const app = express();
require('dotenv').config();


const tbxFilesRoutes = require('./src/tbx_files/routes');

app.use(express.json());
app.use('/files', tbxFilesRoutes);

app.get('/', (req, res) => {
  res.send('This is an assesment for a recruiting process!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
