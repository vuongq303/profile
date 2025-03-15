const nodemailer = require("nodemailer");

const emailTrans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vuongq303@gmail.com",
    pass: "tjbm gory aobb hgwm",
  },
});

module.exports = emailTrans;
