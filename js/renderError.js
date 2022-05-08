export function renderError() {
  const container = document.querySelector("main");
  container.innerHTML = `<article class="item error">There was an error. See the console for details.</article>`;
}
