var express = require("express");
var router = express.Router();
var executeQuery = require("../helper/sql_promise");

router.get("/", async function (req, res) {
  try {
    const sql = "SELECT * FROM thong_tin_du_an WHERE isShow=1";
    const result = await executeQuery(sql);

    res.render("index", { thong_tin_du_an: result });
  } catch (error) {
    console.error("/index", error.message);
    res.render("error", {
      status: 500,
      content: "Lỗi hệ thống, vui lòng thử lại",
    });
  }
});

router.get("/video", function (req, res, next) {
  res.render("video");
});

router.get("/video-detail.html", function (req, res, next) {
  res.render("video-detail");
});

router.get("/du-an/:endpoint", async function (req, res, next) {
  try {
    const endpoint = req.params.endpoint;
    const sql = "SELECT * FROM thong_tin_du_an WHERE endpoint = ?";
    const [result] = await executeQuery(sql, [endpoint]);
    res.render("project-details", {
      ten_du_an: result.ten_du_an,
      hinh_anh: result.hinh_anh,
      file: endpoint,
    });
  } catch (error) {
    console.error("/index", error.message);
    res.render("error", {
      status: 500,
      content: "Lỗi hệ thống, vui lòng thử lại",
    });
  }
});

router.get("/du-an", async function (req, res, next) {
  try {
    const sql = "SELECT * FROM thong_tin_du_an WHERE isShow=1";
    const result = await executeQuery(sql);

    res.render("project", { thong_tin_du_an: result });
  } catch (error) {
    console.error("/project", error.message);
    res.render("error", {
      status: 500,
      content: "Lỗi hệ thống, vui lòng thử lại",
    });
  }
});

router.get("/project/vinhomes-wonder-city", function (req, res, next) {
  res.redirect("/du-an/vinhomes-wonder-city");
});

router.get("/lien-he", function (req, res, next) {
  res.render("contact");
});

router.get("/bang-hang", function (req, res, next) {
  res.render("data");
});

module.exports = router;
