// console.log(`Hello World`);
/* Show Joke on Page
1. Make request with fetch()
2. grap .joke 
3. render it to the private
*/

const url = `https://icanhazdadjoke.com/`;

const jokes = fetch(url, {
	method: "GET",
	headers: {
		Accept: "application/json",
	},
})
	.then((response) => response.json())
	.then((data) => {
		return data;
	})
	.then((theJoke) => {
		console.log(theJoke);
	})
	.catch((err) => console.log(err));
