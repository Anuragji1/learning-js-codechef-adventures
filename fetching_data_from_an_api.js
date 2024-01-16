**Fetching Data From an API**

Statement) In this application of Wordle, we are using a Random Word Generating API. Let's study about API using the same.

Using the Random Word API
Let's explore how to fetch data from an API using JavaScript. We will use the Random Word API (https://random-word-api.vercel.app/api), which provides random words based on certain constraints.

For getting data from an API we use the fetch keyword.

Now there are multiple ways of using an API, we have GET request, POST request, and UPDATE request.

In our case we will be using GET request as we are expecting data from the API. If we want to store some data in the DataBase we use the POST request. In case we want to update some data in the Database, we use UPDATE request.

Let's take a look at the GET request to the random word API.

fetch("https://random-word-api.vercel.app/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
We specify the GET method and use the API URL to get a random word from the API.

response is the data sent by the API. We convert this response to JSON data using resposne.json(), JSON data are easy to handle.
The data in the next step that we are console logging is the JSON data.
We will learn about JSON data in the next note. Before that, let's see a few more things about APIs that will make our life easy.

Query Parameters for Constraints
The Random Word API allows us to set constraints for the random word we want to fetch using query parameters. For instance, if we want to fetch a single word of length 7, we can use the following API URL:

https://random-word-api.vercel.app/api?words=1&length=7

Here, words=1 indicates that we want one word, and length=7 specifies that the word should have a length of 7 characters.

Task: Fetching a Random Joke
As a task, you try fetching a random joke from the Chuck Norris Jokes API (https://api.chucknorris.io/).

You should go through the little documentation atleast once, that's a good practice to understand how any API works. Go through the docs and see how you can make a GET request. And how you can access the data.

REMEMBER: Keep a note, that the return format of every API is different.

Fetch the data from "https://api.chucknorris.io/jokes/random"
Convert the response to JSON format.
Console log the JSON Data. [Go into inspect elements by right clicking anywhere on the web page and open then console tab in the Google Developer's Tool, your data should be logged there)
Chuck Norris

--index.java = fetch(/* FILL IN THE API URL */, {
      method: /* FILL IN THE REQUEST TYPE */,
    })
      .then((response) => /* CONVERT THE RESPONSE TO JSON */)
      .then((data) => /* CONSOLE LOG THE DATA */);

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.java :- fetch("https://api.chucknorris.io/jokes/random", {
  method: "GET"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching joke:", error);
  });

-------------------------------------------------Explanation:

fetch("https://api.chucknorris.io/jokes/random", { method: "GET" }):

Initiates a GET request to the specified API endpoint to fetch a random joke.
Uses the method: "GET" option to explicitly state the HTTP method.
.then(response => response.json()):

Handles the successful response from the API.
Calls response.json() to parse the response data as JSON, making it easier to work with in JavaScript.
.then(data => { console.log(data); }):

Receives the parsed JSON data.
Logs the entire JSON response to the console, which will typically include keys like "value" (containing the joke text) and "categories".
.catch(error => { console.error("Error fetching joke:", error); }):

Catches any errors that occur during the request or response process.
Logs the error message to the console for debugging purposes.
Key Points:

API Documentation: Always consult the API documentation for specific usage guidelines and response format details.
HTTP Methods: Choose the appropriate HTTP method (GET, POST, PUT, etc.) based on the intended action.
JSON Parsing: Parse API responses as JSON to easily access and manipulate data within JavaScript.
Error Handling: Include error handling to gracefully handle potential issues during API interactions.
