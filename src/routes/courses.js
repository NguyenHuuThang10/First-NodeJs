const express = require('express')
const router = express.Router()

const coursesConterller = require('../app/controlers/CoursesController')

// newsConterller.index

router.get('/create', coursesConterller.create) 
router.post('/store', coursesConterller.store)
router.get('/:id/edit', coursesConterller.edit)
router.post('/handle-form-actions', coursesConterller.handleFormActions)
router.put('/:id', coursesConterller.update)
router.patch('/:id/restore', coursesConterller.restore)
router.delete('/:id', coursesConterller.destroy)
router.delete('/:id/force', coursesConterller.forceDelete)
router.get('/:slug', coursesConterller.show)

module.exports = router