import { renderEventList } from "./renderEventList.js";
import { renderError } from "./renderError.js";

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";
const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*&city=Stavanger`;

async function fetchArray() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const eventsArray = data._embedded.events;
    renderEventList(eventsArray);
  } catch (error) {
    renderError();
    console.log(error);
  }
}

fetchArray();
