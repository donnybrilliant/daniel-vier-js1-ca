import { renderEvent } from "./ui/renderEvent.js";
import { renderMessage } from "./ui/renderMessage.js";

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const eventId = params.get("id");

const url = `https://app.ticketaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}&locale=*`;

async function fetchEvent() {
  try {
    const response = await fetch(url);
    const event = await response.json();
    renderEvent(event);
  } catch (error) {
    renderMessage(
      "error",
      "There was an error. See the console for details.",
      "main"
    );
    console.log(error);
  }
}

fetchEvent();
