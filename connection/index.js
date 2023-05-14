// 資料庫
const mongoose = require("mongoose");
require("dotenv").config();

//雲端資料庫
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`);
  } catch (err) {}
})();

//本地端資料庫測試用
// (async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/dineTech");
//     console.log("資料庫連線成功");
//   } catch (err) {
//     console.log("資料庫連線失敗");
//   }
// })();
