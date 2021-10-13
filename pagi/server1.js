const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cars= require('./cars')

mongoose.connect("mongodb://localhost:27017/pagi", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.once('open',async() => {
    if (await cars.countDocuments() ) return
    Promise.all([
    cars.create({ model_name : "ford gt","model_make_id": "ford"}),
    cars.create({ model_name : "ford gt1","model_make_id": "ford"}),
    cars.create({ model_name : "ford gt2","model_make_id": "ford"}),
    cars.create({ model_name : "ford gt3","model_make_id": "ford"}),
    cars.create({ model_name : "ford gt4","model_make_id": "ford"}),
    cars.create({ model_name : "ford gt5","model_make_id": "ford"}),
    
    ])
    
})

app.get('/cars', paginatedResults(cars), (req, res) => {
res.json(res.paginatedResults)
})


function paginatedResults(model) {
return async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < await model.countDocuments().exec()) {
    results.next = {
        page: page + 1,
        limit: limit
    }
    }
    
    if (startIndex > 0) {
    results.previous = {
        page: page - 1,
        limit: limit
    }
    }
    try {
    results.results = await model.find().limit(limit).skip(startIndex).exec()
    res.paginatedResults = results
    next()
    } catch (e) {
    res.status(500).json({ message: e.message })
    }
}
}

app.listen(3000)
console.log('Server Is Listening On Port 3000')