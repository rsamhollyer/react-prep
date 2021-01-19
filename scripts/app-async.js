/*

How do you get an 'as-you-type' feature in your front end app?
Example: as you type a suername into a sgnup form ite tells you if that name is taken.

1. add event listener
2. this will use a fetch() in the callback to check an end-point to check if that value exists
3. render the response

*/

function main() {
	const jokeButton = document.querySelector("#new-joke");
	jokeButton.addEventListener("click", async (event) => {
		event.preventDefault();
		const joke = await getJoke();
		renderJoke(joke);
	});
}

main();

const url = `https://icanhazdadjoke.com/`;

async function getJoke() {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});

	const jokeData = await response.json();
	return jokeData.joke;
}

async function renderJoke(joke) {
	// async beacuse we will await getjoke
	//create the dom element
	const p = document.createElement("p");
	//put joke text into it
	p.textContent = joke;
	//attach it to an existing dom element
	const root = document.querySelector("#root");
	root.appendChild(p);
}
