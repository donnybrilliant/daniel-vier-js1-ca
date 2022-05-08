export function renderMessage(type, message, target, add) {
  const container = document.querySelector(target);
  if (add) {
    container.innerHTML += `<article class="item ${type}">${message}</article>`;
  } else {
    container.innerHTML = `<article class="item ${type}">${message}</article>`;
  }
}
