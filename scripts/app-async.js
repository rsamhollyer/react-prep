const url = `https://icanhazdadjoke.com/`;

async function main() {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});

	const jokeData = await response.json();
	console.log(jokeData);
	console.log(jokeData.joke);
}

main();
