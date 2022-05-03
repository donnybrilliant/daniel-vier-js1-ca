const container = document.querySelector("main");

const url = "https://genius.p.rapidapi.com/search?q=Turnstile";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
    "X-RapidAPI-Key": "ce73b45c05msh3ac0571cea4200ep17a626jsn75fc7e054f5f",
  },
};

async function fetchArray() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchArray();
