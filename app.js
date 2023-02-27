/* Created by Tivotal */

const form = document.querySelector("form");
const input = form.querySelector(".input");
const text = form.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  form.classList.add("error");
  form.classList.remove("valid");

  if (input.value == "") {
    text.innerText = "Email can't be empty";
  } else if (!input.value.match(pattern)) {
    text.innerText = "Please enter a valid email";
  } else {
    form.classList.replace("error", "valid");
    text.innerText = "This email is valid";
  }
});
