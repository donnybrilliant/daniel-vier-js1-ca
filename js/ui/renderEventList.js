import { formatDate } from "../functions/formatDate.js";

export function renderEventList(eventsArray) {
  const container = document.querySelector("main");
  container.innerHTML = "";
  eventsArray.forEach((event) => {
    const date = event.dates.start.localDate;
    const formattedDate = formatDate(date);
    container.innerHTML += `
        <a href="details.html?id=${event.id}">
        <article class="item">${event.name}
        <p>${formattedDate}</p></article></a>`;
  });
}
