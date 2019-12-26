const config = require('../config/auth.config')
var getRawBody = require('raw-body')
let XMLJS = require('xml-js')

module.exports = {
  // getRawbody, 第一个参数是Node.js的Stream
  // 此处要定义为ctx.req, 而不是ctx.request
  async autoreply(ctx) {
    let xml = await getRawBody(ctx.req, {
      length: ctx.req.headers['content-length'],
      limit: '1mb',
      encoding: true
    })
    // console.log(result)
    let replyObject = xmljs.xml2js(xml, {
      compact:true,
    })
  }
}