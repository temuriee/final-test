const jokeDiv = document.querySelector(".jokeDiv");
const fetchButton = document.querySelector("#fetchButton");
const thumbsUpButton = document.querySelector("#thumbsUpButton");
const thumbsDownButton = document.querySelector("#thumbsDownButton");
const counterDiv = document.querySelector("#counter");

let totalCounter = 0;

async function fetchJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    jokeDiv.textContent = joke.value;
  } catch (error) {
    jokeDiv.textContent = "Failed to fetch joke. Try again!";
    console.error(error);
  }
}

fetchButton.addEventListener("click", fetchJoke);

// Like Button
thumbsUpButton.addEventListener("click", () => {
  totalCounter++;
  counterDiv.textContent = `Total Like/Dislike: ${totalCounter}`;
});

// Dislike Button
thumbsDownButton.addEventListener("click", () => {
  totalCounter--;
  counterDiv.textContent = `Total Like/Dislike: ${totalCounter}`;
});
