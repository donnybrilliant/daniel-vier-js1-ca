const form = document.querySelector("form");
const name = document.querySelector("input#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("input#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("input#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("input#address");
const addressError = document.querySelector("#address-error");
const container = document.querySelector(".item");

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();
  if (name.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (subject.value.trim().length >= 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (address.value.trim().length >= 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (validateEmail(email.value.trim())) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (
    name.value.trim().length > 0 &&
    subject.value.trim().length >= 10 &&
    address.value.trim().length >= 25 &&
    validateEmail(email.value.trim())
  ) {
    container.innerHTML += `<article class="item success">Message sent</article>`;
  }
}

form.addEventListener("submit", validateForm);
