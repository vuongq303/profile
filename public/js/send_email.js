import { baseUrlApi } from "./base/base.js";

document.addEventListener("DOMContentLoaded", function () {
  const formSendEmail = document.querySelectorAll(".send-email");
  formSendEmail.forEach((form) => {
    form.action = `${baseUrlApi}/index/send-email`;
  });
});
