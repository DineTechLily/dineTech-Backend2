const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/loginModel"); // 引入使用者模型

router.post("/", async (req, res, next) => {
  const { account, password } = req.body; // 從請求主體中取得帳號和密碼

  try {
    // 根據帳號查找使用者
    const user = await User.findOne({ account });

    // 如果找不到使用者，回傳錯誤訊息
    if (!user) {
      return res.status(401).json({ success: false, message: "帳號不存在" });
    }

    // 驗證密碼是否正確
    const isPasswordValid = user.password === password;

    // 如果密碼不正確，回傳錯誤訊息
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "密碼不正確" });
    }

    // 產生 JWT
    const token = await jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY, // 請替換成自己的密鑰
      { expiresIn: "24h" } // 設定過期時間，這裡設定為 1 小時
    );
    // 回傳 JWT 至前端
    res.status(200).json({ success: true, token });
  } catch (err) {
    console.error({ err });
    res.status(500).json({ message: "伺服器發生錯誤" });
  }
});

module.exports = router;
