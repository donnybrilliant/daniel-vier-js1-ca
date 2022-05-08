import { validateForm } from "./form/validateForm.js";
const form = document.querySelector("form");

form.addEventListener("submit", validateForm);
