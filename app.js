const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// 資料庫設定開始
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`)
  .then(res => console.log("連線資料成功"));


// 後台
const loginRouter = require('./back/routes/login');

const app = express();

//cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 後台
app.use('/admin/login', loginRouter);

module.exports = app;
