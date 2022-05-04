const container = document.querySelector("main");

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";

const url = `https://app.ticketmaster.com/discovery/v2/events/Z698xZb_Z17QA7y?apikey=${apiKey}&locale=*`;

async function fetchEvent() {
  try {
    const response = await fetch(url);
    const event = await response.json();
    container.innerHTML = "";
    console.log(event);

    container.innerHTML += `
      <h1>${event.name}</h1>`;
  } catch (error) {
    console.log(error);
  }
}

fetchEvent();
