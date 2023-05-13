const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Account = require("../models/empLoginModels");

// message
const loginFailedError = { message: 'Login Failed, Please Try Again!' };

// register just for testing purposes
router.post('/register', async function (req, res) {
  password = await bcrypt.hash(req.body.password, 12);
  //console.log(req.body.emp_id+req.body.emp_id)
  const newAccount = await Account.create({
    account : req.body.company_id + req.body.emp_id,
    password: password
  });
  res.status(200).json({
    status: 'success',
    post: newAccount
  });
});

router.post('/login', async function (req, res, next) {

  // corresponds to the request
  const { company_id, emp_id, password } = req.body;
  const account = req.body.company_id + req.body.emp_id;

  // get user account and password
  const user = await Account.findOne({account: account}).select('+password')
  // 要改成其他運算可能才會加快速度
  const vertify = await bcrypt.compare(req.body.password, user.password)
  
  try{
    // cannot leave the empty space
    if (!emp_id || !password || !company_id) {
      res.status(401).json({
        message: 'Cannot Leave Empty Blank'
      });
    }
    
    // if the user existed
    if (!user) {
      res.status(401).json(loginFailedError);
    // if password is incorrect
    } else if (vertify === false) {
      res.status(401).json(loginFailedError);

    // if the password is correct, generate the jwt token
    } else {
      const token = jwt.sign({account},"SecrEt",{
        expiresIn: 1
      });
      res.status(201).json({
        token: token,
        message: 'login success'
      });
    }
  }catch(error) {
    console.log(error);
  }
});

router.post('/logout', async function (_, res) {
  try{  
    res.status(201).json({
      message: 'logout success, remember to remove token',
    });
  }catch (error){
    console.log(error);
  }
});

module.exports = router;