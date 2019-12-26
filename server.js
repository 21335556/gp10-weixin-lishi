const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser({
  extendType: {
    text: ['text/xml']
  }
}))

const auth = require('./router/')

const router = new Router()
router.use('/', auth.routes())

app.use(router.routes())

app.listen(3333, () => {
  console.log('localhost:3333')
})