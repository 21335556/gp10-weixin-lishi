const Router = require('koa-router')
const authController = require('../controller/auth')
const replyController = require('../controller/reply')

const router = new Router()

router.get('auth', authController.auth)
router.post('auth', replyController.autoreply)

module.exports = router