const Express = require('express')

const router = Express.Router()

const messageController = require('../controllers/message')

const authenticator = require('../middleware/authenticator')

router.post('/sendmsg',authenticator.authenticator,messageController.sendmsg)

module.exports = router;