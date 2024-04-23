const express = require('express');
const router = express()

router.get('/todo',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({msg:"Get to /api/todo route"})
})

router.post('/todo',(req,res)=>{
    res.status(200).json({msg:"Post to /api/todo route"})
})

router.delete('/todo/:id',(req,res)=>{
    res.status(200).json({msg:"Delete to /api/todo:id route"})
})

router.put('/todo/:id',(req,res)=>{
    res.status(200).json({msg:"Put to /api/todo:id route"})
})

module.exports = router;