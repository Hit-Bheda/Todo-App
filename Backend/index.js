const express = require('express');
const app = express()
const router = require('./routes')
require('dotenv').config()
const data = require('./Fuck.json')

// app.use((req,res,next)=>{
//     res.setHeader('Content-Type','application/json')
//     next()
// })
// app.use('/api', router)
app.get('/',(req,res)=>{
    res.send(data)
})


app.listen(process.env.PORT, () => {
    console.log(`app listening  http://localhost:${process.env.PORT}!`)
})