const express = require('express')
const router = express.Router()

const newsConterller = require('../app/controlers/NewsController')

// newsConterller.index

router.get('/:slug', newsConterller.show)
router.get('/', newsConterller.index)

module.exports = router