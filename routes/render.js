var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/video.html", function (req, res, next) {
  res.render("video");
});

router.get("/video-detail.html", function (req, res, next) {
  res.render("video-detail");
});

router.get("/project-details.html", function (req, res, next) {
  res.render("project-details");
});

router.get("/project.html", function (req, res, next) {
  res.render("project");
});

router.get("/contact.html", function (req, res, next) {
  res.render("contact");
});

router.get("/data.html", function (req, res, next) {
  res.render("data");
});

// router.get("/project.html", function (req, res, next) {
//   res.render("project");
// });

module.exports = router;
