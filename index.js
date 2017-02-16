const express = require('express')
const path = require('path')
const app = express()
const basicAuth = require('basic-auth')

app.use((req, res, next) => {
  const unauthorized = (res) => {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
    return res.sendStatus(401)
  }

  const user = basicAuth(req)

  if (!user || !user.name || !user.pass) {
    return unauthorized(res)
  }

  if (user.name === 'react-dev' && user.pass === 'iLoveEs6') {
    return next()
  } else {
    return unauthorized(res)
  }
})

app.use(express.static(path.join(__dirname, '/dist')))

app.listen(process.env.PORT || 3030, () => {
  console.log(`Server running on port:${process.env.PORT || 3030}`)
})
