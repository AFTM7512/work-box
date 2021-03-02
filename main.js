
const express = require('express')
const { resolve } = require('path')
const app   = express()
const port  = '3002'

// 静态文件
app.use('/static', express.static(resolve(__dirname, './public')))

// 添加路由
app.use('/globalApi', require('./routes/global-api.js'));     // 全局
// app.use('/user', require('./routes/user.js'));                // 用户
// app.use('/todo', require('./routes/todo.js'));                // 日程
// app.use('/plan', require('./routes/plan.js'));                // 计划
// app.use('/inspiration', require('./routes/inspiration.js'));  // 灵感


app.listen(port, () => console.log(`http://localhost:${port}`))