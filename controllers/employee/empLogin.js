const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Account = require("../../models/staffLoginModels");

// message
const loginFailedError = { message: "Login Failed, Please Try Again!" };

const Login = {
  async register(req, res) {
    try {
      password = await bcrypt.hash(req.body.password, 12);

      const newAccount = await Account.create({
        account: req.body.company_id + req.body.emp_id,
        password: password,
      });
      res.status(200).json({
        status: "success",
        post: newAccount,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  async login(req, res) {
    try {
      // corresponds to the request
      const { company_id, emp_id, password } = req.body;
      const account = company_id + emp_id;

      // cannot leave the empty space
      if (!emp_id || !password || !company_id) {
        res.status(401).json({
          message: "Cannot Leave Empty Blank",
        });
      }
      // get user account and password
      const user = await Account.findOne({ account: account }).select(
        "+password"
      );

      // if the user existed
      if (!user) {
        res.status(401).json(loginFailedError);

        // if password is incorrect
      } else if (
        (await bcrypt.compare(req.body.password, user.password)) === false
      ) {
        res.status(401).json(loginFailedError);

        // if the password is correct, generate the jwt token
      } else {
        const token = jwt.sign({ account }, "SecrEt", {
          expiresIn: 1,
        });
        res.status(201).json({
          token: token,
          message: "login success",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  async logout(_, res) {
    try {
      res.status(201).json({
        message: "logout success, remember to remove token",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};
module.exports = Login;
