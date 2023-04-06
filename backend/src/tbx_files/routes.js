const express = require('express')
const router = express.Router()
const { getData } = require('./getData')
const { getFiles } = require('./getFiles')

router.get('/data', getData)
router.get('/list', getFiles)

module.exports = router
