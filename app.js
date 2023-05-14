const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// DB connection
require("./connection");

// 前台API Router Import
const custRouter = require("./routes/customer/cust");
const empRouter = require("./routes/employee/emp");

// 後台
const loginRouter = require("./routes/admin/login");
const productRouter = require("./routes/admin/product");
const customizationRouter = require("./routes/admin/customization");
const saleRouter = require("./routes/admin/sale");
const discountRouter = require("./routes/admin/discount");

const app = express();

//cors
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//前台customer
// app.use("/cust/guest", custGuestRouter);
app.use("/cust", custRouter);

//前台employee
app.use("/emp", empRouter);

// 後台
app.use("/admin/login", loginRouter);
app.use("/admin/product", productRouter);
app.use("/admin/customization", customizationRouter);
app.use("/admin/sale", saleRouter);
app.use("/admin/discount", discountRouter);

module.exports = app;