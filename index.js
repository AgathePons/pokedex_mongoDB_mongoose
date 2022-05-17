require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');

app.set('view engine', 'ejs');
app.use(express.static('/public'));

// connect to the mongodb db, default port 27017
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokemon');

app.use(router);

app.listen(process.env.PORT, _ => {
  console.log(`http://localhost:${process.env.PORT}`);
});