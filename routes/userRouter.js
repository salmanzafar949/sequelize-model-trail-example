const userController = require('../controllers/UserController')
const router = require('express').Router()

router.post('/', userController.store)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)

module.exports = router