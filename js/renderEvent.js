import { formatDate } from "./formatDate.js";

export function renderEvent(event) {
  const container = document.querySelector("main");
  container.innerHTML = "";
  const date = event.dates.start.localDate;
  const formattedDate = formatDate(date);
  container.innerHTML += `<article class="item event">
        <h1>${event.name}</h1>
        <img src="${event.images[2].url}">
        <div class="details">
        <p>${formattedDate}</p>
        <a href="${event.url}" target="_blank" class="tickets">Billetter</a></div></div>`;
}
