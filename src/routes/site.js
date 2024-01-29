const express = require('express')
const router = express.Router()

const siteConterller = require('../app/controlers/SiteController')

router.get('/search', siteConterller.search)
router.get('/', siteConterller.index)

module.exports = router