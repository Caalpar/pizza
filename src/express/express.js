const express = require('express')
const routes = require('./routes/index')
const app = express()
const port = 46664


app.use(express.json(), express.text())
app.use(
  express.urlencoded({
    extended: true
  })
)


app.use(express.static('public'))

app.use('/', routes)

app.listen(port, '0.0.0.0', () =>
  console.log(`Express successfully connected to port ${port}`)
)

