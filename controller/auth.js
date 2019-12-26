const config = require('../config/auth.config')
const crypto = require('crypto')

module.exports = {
  auth(ctx) {
    let {
      signature,
      echostr,
      timestamp,
      nonce
    } = ctx.query

    let orderedStr = [ config.token, timestamp, nonce ].sort().join()
    let secret = crypto.createCipher('sha1').update(orderedStr).degest('hex')
    console.log(secret)

    if (secret === signature) {
      ctx.body = echostr
    } else {
      ctx.body = 'aaa'
    }

  }
}