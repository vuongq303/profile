import { baseUrlApi } from "./base/base.js";

document.addEventListener("DOMContentLoaded", function () {
  const formSendEmail = document.querySelectorAll(".send-email");
  formSendEmail.forEach((form) => {
    form.action = `${baseUrlApi}/index/send-email`;
  });
});

const current_date = document.getElementById("current-date");
const d = new Date();
current_date.textContent = `Ngày update: ${d.getDate()}/${
  d.getMonth() + 1
}/${d.getFullYear()}`;
