const container = document.querySelector("main");

/* const url = "https://genius.p.rapidapi.com/search?q=Turnstile";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
    "X-RapidAPI-Key": "ce73b45c05msh3ac0571cea4200ep17a626jsn75fc7e054f5f",
  },
}; */

const apiKey = "LBY1JKNzQTx6Cl12s9d8wAEp4ro2dH80";
const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*&city=Stavanger`;

async function fetchArray() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const eventsArray = data._embedded.events;
    container.innerHTML = "";
    console.log(eventsArray);
    eventsArray.forEach((event) => {
      const date = event.dates.start.localDate;
      const [year, month, day] = date.split("-");
      const formattedDate = [month, day, year].join("/");
      container.innerHTML += `<a href="details.html?id=${event.id}">
      <article class="item">
      ${event.name}<p>${formattedDate}</p></article></a>`;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchArray();
