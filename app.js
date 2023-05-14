const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// 資料庫
const mongoose = require("mongoose");

//雲端資料庫
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`);
  } catch (err) {}
})();

//本地端資料庫測試用
// (async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     console.log('資料庫連線成功');
//   } catch (err) {
//     console.log('資料庫連線失敗');
//   }
// })();

// 前台API Router Import
const custMenuRouter = require("./front/routes/custMenu");
const custFeedbackRouter = require("./front/routes/custFeedback");

const empRouter = require("./routes/employee/empLogin");

// 後台
const loginRouter = require("./routes/admin/login");
const productRouter = require("./routes/admin/product");
const customizationRouter = require("./routes/admin/customization");
const saleRouter = require("./routes/admin/sale");
const discountRouter = require("./routes/admin/discount");

const app = express();

require("./connection");

//cors
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//前台customer
app.use("/cust/menu", custMenuRouter);
app.use("/cust/guest", custGuestRouter);
app.use("/cust/feedback", custFeedbackRouter);

//前台employee
app.use("/emp", empRouter);

// 後台
app.use("/admin/login", loginRouter);
app.use("/admin/product", productRouter);
app.use("/admin/customization", customizationRouter);
app.use("/admin/sale", saleRouter);
app.use("/admin/discount", discountRouter);

module.exports = app;
