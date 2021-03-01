
const express = require('express')
const { resolve } = require('path')
const app   = express()
const port  = '3002'

app.use('/static', express.static(resolve(__dirname, './public')))

app.get('/', (req, res) => {
  res.send('hello express!')
})


app.listen(port, () => console.log(`http://localhost:${port}`))