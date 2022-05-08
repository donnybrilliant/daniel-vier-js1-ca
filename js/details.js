import { renderEvent } from "./renderEvent.js";
import { renderError } from "./renderError.js";

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const eventId = params.get("id");

const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}&locale=*`;

async function fetchEvent() {
  try {
    const response = await fetch(url);
    const event = await response.json();
    renderEvent(event);
  } catch (error) {
    renderError();
    console.log(error);
  }
}

fetchEvent();
