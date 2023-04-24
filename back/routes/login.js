const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/loginModel"); // 引入使用者模型

// router.post('/', async (req, res, next) => {
//   const { account, password } = req.body; // 從請求主體中取得帳號和密碼

//   try {
//     // 根據帳號查找使用者
//     const user = await User.findOne({ account });

//     // 如果找不到使用者，回傳錯誤訊息
//     if (!user) {
//       res.status(401).json({ message: '帳號不存在' });
//     }

//     // 驗證密碼是否正確
//     const isPasswordValid = await user.comparePassword(password);

//     // 如果密碼不正確，回傳錯誤訊息
//     if (!isPasswordValid) {
//       res.status(401).json({ message: '密碼不正確' });
//     }

//     // 產生 JWT
//     const token = jwt.sign(
//       { userId: user._id },
//       'your-secret-key', // 請替換成自己的密鑰
//       { expiresIn: '1 day' } // 設定過期時間，這裡設定為 1 小時
//     );

//     // 回傳 JWT 至前端
//     res.status(200).json({ token });
//   } catch (err) {
//     res.status(500).json({ message: '伺服器發生錯誤' });
//   }
// });

module.exports = router;
