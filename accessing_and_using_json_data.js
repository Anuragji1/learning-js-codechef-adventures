**Accessing and Using JSON Data**

Statement) JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for both humans and machines to read and write. It is often used to transmit data between a server and a web application as an alternative to XML.

Breaking Down the JSON Data
Let's break down the JSON data received from the Chuck Norris jokes API:

{
    "categories": [],
    "created_at": "2020-01-05 13:42:19.104863",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "XpnVFe3OSH2AjmsTFuvqcA",
    "updated_at": "2020-01-05 13:42:19.104863",
    "url": "https://api.chucknorris.io/jokes/XpnVFe3OSH2AjmsTFuvqcA",
    "value": "Chuck Norris can sleep with eyes OPEN."
}
"categories": []: This is an empty array, indicating that the Chuck Norris joke does not belong to any specific category.

"created_at": "2020-01-05 13:42:19.104863": This is the timestamp representing the date and time when the joke was created.

"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png": This is the URL of the Chuck Norris icon associated with the joke.

"id": "XpnVFe3OSH2AjmsTFuvqcA": This is a unique identifier for the Chuck Norris joke.

"updated_at": "2020-01-05 13:42:19.104863": This is the timestamp representing the date and time when the joke was last updated.

"url": "https://api.chucknorris.io/jokes/XpnVFe3OSH2AjmsTFuvqcA": This is the URL to access the specific joke via the API.

"value": "Chuck Norris can sleep with eyes OPEN.": This is the actual Chuck Norris joke, represented by the "value" property. It states, "Chuck Norris can sleep with eyes OPEN."

Extracting the Joke (Value Property)
To extract the Chuck Norris joke from the JSON data in JavaScript, you can simply access the "value" property. Since the JSON data is represented as an object, you can use dot notation to access the "value" property.

Here's an example of how to extract the joke:

const jsonData = {
    "categories": [],
    "created_at": "2020-01-05 13:42:19.104863",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "XpnVFe3OSH2AjmsTFuvqcA",
    "updated_at": "2020-01-05 13:42:19.104863",
    "url": "https://api.chucknorris.io/jokes/XpnVFe3OSH2AjmsTFuvqcA",
    "value": "Chuck Norris can sleep with eyes OPEN."
};

const joke = jsonData.value;
console.log(joke); // Output: "Chuck Norris can sleep with eyes OPEN."
By accessing jsonData.value, we can retrieve the Chuck Norris joke stored in the "value" property and store it in the variable joke.

Task
In the last task you have fetched the data from the API, here access the data and append it to the joke ID div, and display in the DOM.

index.js:- // Fetch data from the API
fetch(/* Add the API URL */)
  .then((response) => /* Convert response to JSON */)
  .then((data) => {
    // Data contains the response from the API in JSON format

    // Call the displayJoke function for appending
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

function displayJoke(jokeText) {
  // Access the div with ID "joke"

  // Create a new paragraph element

  // Set the text content to the joke text

  // Append the paragraph to the "joke" div
}
-------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.js:- fetch("https://api.chucknorris.io/jokes/random", { method: "GET" })
  .then(response => response.json())
  .then(data => {
    const jokeText = data.value;
    const jokeDiv = document.getElementById("joke");
    jokeDiv.textContent = jokeText;
  })
  .catch(error => {
    console.error("Error fetching joke:", error);
  });


------------------------------------------------------Explanation:

Fetches the joke: The fetch function retrieves a random joke from the API.
Parses JSON: The response.json() method parses the response data as JSON.
Extracts the joke text: The data.value property holds the joke text, which is assigned to jokeText.
Gets the div element: The document.getElementById("joke") line retrieves the div element with the ID "joke" from the DOM.
Appends the joke: The jokeDiv.textContent = jokeText; line sets the text content of the div to the fetched joke, displaying it on the webpage.
Handles errors: The catch block logs any errors that might occur during the process.
