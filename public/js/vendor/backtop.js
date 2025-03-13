$(document).ready(function () {
  "use strict";
  var $progressPath = $(".scrollToTop path");
  if ($progressPath.length === 0) {
    console.warn("No progress path found.");
    return;
  }
  var progressPath = $progressPath[0];
  if (!progressPath) {
    console.error("Progress path element is null.");
    return;
  }
  var pathLength;
  try {
    pathLength = progressPath.getTotalLength();
  } catch (e) {
    console.error("Error getting path length:", e);
    return;
  }
  $(progressPath).css({
    transition: "none",
    WebkitTransition: "none",
    strokeDasharray: pathLength + " " + pathLength,
    strokeDashoffset: pathLength,
  });
  progressPath.getBoundingClientRect();

  $(progressPath).css({
    transition: "stroke-dashoffset 10ms linear",
    WebkitTransition: "stroke-dashoffset 10ms linear",
  });

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    $(progressPath).css("strokeDashoffset", progress);
  };

  updateProgress();

  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 550;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".scrollToTop").addClass("active-progress");
      $(".tmp-ready-chat").addClass("chat-visible");
    } else {
      $(".scrollToTop").removeClass("active-progress");
      $(".tmp-ready-chat").removeClass("chat-visible");
    }
  });

  $(".scrollToTop").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});