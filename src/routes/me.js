const express = require('express')
const router = express.Router()

const meConterller = require('../app/controlers/MeController')

// newsConterller.index

router.get('/stored/courses', meConterller.storedCourses)
router.get('/trash/courses', meConterller.trashCourses)

module.exports = router