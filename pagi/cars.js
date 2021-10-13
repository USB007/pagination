const mongoose = require('mongoose')

const schema = new mongoose.Schema({
model_name :{
    type: String,
    required: true,
},
model_make_id :{
    type : String,
    required: true
}
})

module.exports = mongoose.model('Car',schema)
