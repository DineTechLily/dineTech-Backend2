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


const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

const app = express();

//cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

module.exports = app;
