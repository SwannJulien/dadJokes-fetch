const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const button = document.querySelector(".button");

// API endpoint and connexion options
const url = config.url;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": config.key,
    "X-RapidAPI-Host": config.host,
  },
};

// Triggered the function getData() when pushing the button
button.addEventListener("click", getData);

// Fetch data from the API and send them to the function renderData()
async function getData() {
  const response = await fetch(url, options);
  const result = await response.json();
  const data = await result.body[0];
  renderData(data);
}

// Create an animation where we see the setup and the punchline one at a time. Then at the end, the button come back in order to get another joke.
function renderData(data) {
  button.classList.add("inactive");

  setTimeout(insertSetup, 1000);

  function insertSetup() {
    setup.insertAdjacentText("beforeend", data.setup);
    setup.classList.toggle("inactive");
  }

  setTimeout(insertPunchline, 6000);

  function insertPunchline() {
    setup.classList.toggle("inactive");
    punchline.insertAdjacentText("beforeend", data.punchline);
    punchline.classList.add("active");
    punchline.classList.toggle("inactive");
  }

  setTimeout(getButtonBack, 12000);

  function getButtonBack() {
    button.classList.add("active");
    punchline.classList.toggle("inactive");
    punchline.classList.remove("active");
    button.classList.toggle("inactive");
  }
}
