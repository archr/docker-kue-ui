const kue = require('kue')
const express = require('express')
const ui = require('kue-ui')
const basicAuth = require('basic-auth')
const app = express()

const {
  KUE_PREFIX,
  REDIS_URL,
  USERNAME,
  PASSWORD
} = process.env

kue.createQueue({
  prefix: process.env.KUE_PREFIX,
  redis: process.env.REDIS_URL || 'redis://localhost:6379'
})

ui.setup({
  apiURL: '/api',
  baseURL: '/',
  updateInterval: 1000 * 10
})

app.use((req, res, next) => {
  const user = basicAuth(req)

  if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
    return res.send(401)
  }

    next()
})

app.use('/api', kue.app)
app.use('/', ui.app)

app.listen(5000)
