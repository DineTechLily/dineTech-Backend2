const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Account = require("../models/empModels");

// message
const loginFailedError = { message: 'Login Failed, Please Try Again!' };

router.post('/login', async function (req, res, next) {
  const { company_id, emp_id, password } = req.body;
  const account = req.body.company_id + req.body.emp_id;
  if (!emp_id || !password || !company_id) {
    res.status(401).json({
      message: 'Cannot Leave Empty Blank'
    });
  }
  const user = await Account.findOne({account: account}).select('+password')
  if (!user) {
    res.status(401).json(loginFailedError);
  } else if (!bcrypt.compare(req.body.password, user.password)) {
    res.status(401).json(loginFailedError);
  } else {
    const token = jwt.sign({account},"SecrEt",{
      expiresIn: 1
    });
    res.status(201).json({
      token: token,
      messgae: 'login success'
    });
  }
});

router.post('/logout', async function (_, res) {
  res.status(201).json({
    messgae: 'logout success, remember to remove token',
  });
});

module.exports = router;

// router.get('/', async function (req, res) {
//   res.status(200).json({
//     "test":"test"
//   });
// });

// // register 
// router.post('/register', async function (req, res) {
//   password = await bcrypt.hash(req.body.password, 12);
//   console.log(req.body.emp_id+req.body.emp_id)
//   const newAccount = await Account.create({
//     account : req.body.company_id + req.body.emp_id,
//     password: password
//   });
//   res.status(200).json({
//     status: 'success',
//     post: newAccount
//   });
// });