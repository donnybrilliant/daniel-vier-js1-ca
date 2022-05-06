const container = document.querySelector("main");

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const eventId = params.get("id");

const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}&locale=*`;

async function fetchEvent() {
  try {
    const response = await fetch(url);
    const event = await response.json();
    container.innerHTML = "";
    console.log(event);
    const date = event.dates.start.localDate;
    const [year, month, day] = date.split("-");
    const formattedDate = [month, day, year].join("/");
    container.innerHTML += `<div class="event">
      <h1>${event.name}</h1>
      <p>${formattedDate}</p>
      <img src="${event.images[2].url}">
      <div class="details">
      <a href="${event.url}" target="_blank" class="tickets">Billetter</a></div></div>`;
  } catch (error) {
    console.log(error);
  }
}

fetchEvent();
