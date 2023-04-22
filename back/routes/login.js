var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`)
    .then(() => res.send("連線資料成功"));
});

module.exports = router;
