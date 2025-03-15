var express = require("express");
const emailTrans = require("../middleware/email");
var router = express.Router();

router.post("/send-email", async function (req, res, next) {
  var name = req.body.name || "";
  var tel = req.body.tel || "";
  var message = req.body.message || "";
  var email = req.body.email || "";
  var project = req.body.project || "";

  try {
    const mailOptions = {
      from: "vuongq303@gmail.com",
      to: "longnasa88@gmail.com",
      subject: "Đăng kí nhận thông tin",
      text: `Tên: ${name}\nSố điện thoại: ${tel}\nLời nhắn: ${message}\nEmail: ${email}\nDự án quan tâm: ${project}`,
    };

    await emailTrans.sendMail(mailOptions);
    return res.render("submit-email", {
      message1: `Yêu cầu của anh chị đã được tiếp nhận`,
      message2: "tôi sẽ phản hồi yêu cầu này sớm nhất. Xin cảm ơn.",
    });
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return res.render("submit-email", {
      response: `Lỗi gửi email`,
    });
  }
});
module.exports = router;
