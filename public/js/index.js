import { baseUrlApi } from "./base/base.js";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(
    ".chat-box #send-email"
  ).action = `${baseUrlApi}/index/send-email`;

  const formSendEmail = document.querySelectorAll(".contact-form #send-email");
  formSendEmail.forEach((form) => {
    form.action = `${baseUrlApi}/index/send-email`;
  });
});
