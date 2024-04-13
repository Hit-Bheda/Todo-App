const express = require('express');
const app = express()
const router = require('./routes')
require('dotenv').config()

app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`app listening  http://localhost:${process.env.PORT}!`)
})