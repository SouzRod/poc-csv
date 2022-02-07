const router = require('express').Router()
const multer = require('multer')

const multerConfig = multer()

const userController = require('../src/controller/user')

router.post('/register-users', multerConfig.single('file'), userController.register)

module.exports = router