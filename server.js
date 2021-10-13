const express = require('express')
const app = express();

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/pagination",{useNewUrlParser: true,useUnifiedTopology:true})
