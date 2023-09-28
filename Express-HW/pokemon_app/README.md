## User Stories

1. When a user goes to the `/pokemonroute`, they will see an index of Pokemon: the names of each Pokemon rendered to the page.
2. When a user clicks on the name of a Pokemon, they will be taken to that Pokemon's show page and will see the Pokemon's name and image.
3. When a user goes to `/pokemon/new`, a user sees a form that allows them to create a brand new Pokemon, and then redirects the user back to `/pokemon`.

## Getting Started

Follow these instructions to set up and run the Pokemon App on your local machine.

### Set Up File Structure

In your terminal, navigate to your desired project folder and execute the following commands:

```bash
mkdir pokemon_app
cd pokemon_app
mkdir views
touch views/Index.jsx
touch views/Show.jsx
mkdir models
touch models/pokemon.js
touch server.js
touch .gitignore
npm init -y
```

This will create the necessary file structure for your application.

## Install NPM Packages

Install the required NPM packages by running the following commands in your terminal:

```bash
npm i express
npm i jsx-view-engine react react-dom
```

Make sure to check your package.json file to confirm that the packages have been added.

## Set Up Your Server

In your server.js file, set up your Express server as follows:

```javascript
// Import required modules
const express = require("express");
const app = express();
const port = 3000;

// Set up your routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

To start your server, run the following command in your terminal:
Visit http://localhost:3000 in your web browser to ensure that you see the "Welcome to the Pokemon App!" message.

## Set Up Your 'Database'

Inside the models/pokemon.js file, you will find an array of Pokemon objects. This array serves as your "database" for this application. Do not edit the image URLs directly inside the database.

## Usage

Now that you have set up your Pokemon App, you can start implementing the features according to the provided user stories. INDEX and SHOW routes have been set up for you, while NEW and CREATE routes are left for you to implement. Use your notes and reference the fruits and vegetables app for guidance on setting up NEW and CREATE routes correctly.

Happy coding, and let's start catching 'em all!

```javascript
const pokemon = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
  { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];
```

Set up your 'database' so that it can be exported to your server.jsand then be required by your server.js
Set this 'database' to a variable called pokemonin your server.jsfile
Create a get route /pokemonthat will res.send(pokemon), which will display your pokemon data as json in the browser

🔴 Commit:
"Connected my database, can see json in the browser"

## Set up your index view

1. Instead of displaying json at your /pokemonroute, you should serve the Index.jsxfile you created that will display your pokemon
2. You will have to set up your jsx file
3. Start with your html boilerplate code
4. Add an <h1>that describes this page, i.e. 'See All The Pokemon!'
5. Try adding some inline styles:
6. We can add inline CSS, which are specified as attributes and are passed to the elements. These are specified as an object with a key as camelCased style name & value being the actual style value (and not as a string).

```javascript
const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};

class MyFirstComponent extends React.Component() {
return (
  <div style={myStyle}>My First React Component!</div>;
}
}
```

7. Change your /pokemonroute to res.renderyour Index.jsxfile
8. In your browser, go to localhost:3000/pokemonand be sure to see your Index.jsxview with an h1tag
   🔴 Commit:
   "index.jsx view rendered at pokemon route"

## Set Up Index View

### Display Pokemon Data

To set up your index view and display Pokemon data, follow these steps:

1. Continue working on your `Index.jsx` view to display the name of each Pokemon as a list item inside an unordered list.
2. Ensure that this list is dynamically rendered based on your data from your 'database'.
3. Capitalize the first letter of each Pokemon's name programmatically.

**Commit Message:** "I can view a list of all my Pokemon in the browser"

## Setting Up Your Show Route

To set up your show route, follow these steps:

1. Inside your `server.js`, add a new get route `/pokemon/:id` that will respond with `req.params.id`.
2. When you go to `localhost:3000/pokemon/whatever`, "whatever" will show up in the browser.

**Commit Message:** "Show view shows `req.params.id`"

## Link Index View to Show View

To link your `Index.jsx` to your `Show.jsx`, follow these steps:

1. In your `Index.jsx`, for each Pokemon, add an `<a>` tag that has an `href` attribute pointing to the route `/pokemon/x`, where `x` is the array position of the Pokemon in the data array. This should be set dynamically with JSX.
2. Clicking the link should take you to the show route, and the index number corresponding to the Pokemon's array position should be displayed.

**Commit Message:** "Added dynamic anchor tags to `Index.jsx`"

## Render Individual Pokemon in the Show View

To render individual Pokemon in the show view, follow these steps:

1. Copy and paste your code from `Index.jsx` into your `Show.jsx`.
2. Modify the HTML code inside your `Show.jsx` as follows:
   - Your `<h1>` tag should say "Gotta Catch 'Em All".
   - Add an `<h2>` tag that displays the name of the Pokemon.
   - Add an `<img>` tag that displays an image of the Pokemon.
   - Add an anchor tag with the text "back" that takes you back to your `Index.jsx` view.
3. Update the route in `server.js` to render the show view with the Pokemon data.
4. Fix the broken image issue by programmatically adding ".jpg" to the end of the Pokemon's image data.

**Commit Message:** "Created show views of each Pokemon"
