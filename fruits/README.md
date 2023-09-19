# Express.js CRUD, MVC, REST, INDUCES, and JSX

This README provides an overview of key concepts and practices related to Express.js, including CRUD operations, MVC architecture, RESTful routing, INDUCES, and JSX templating.

## Section 1: Introduction to Express: CRUD, MVC, REST, INDUCES, and JSX

### Begin with the End In Mind

- Learn how to read URL parameters.
- Understand common errors, such as multiple responses and incorrect route ordering.
- Explore working with multiple parameters.
- Gain insights into the Request Object.
- Discover how to handle URL queries.
- Describe REST principles and list the various routes.
- Create an Index route.
- Implement a Show route.
- Enhance data in your data array.
- Define MVC (Model-View-Controller) and explain its significance.
- Organize data into a separate file.
- Move presentation code into JSX files.
- Keep the focus on CRUD, MVC, REST, INDUCES, and JSX throughout the learning journey.

![CRUD, MVC, REST, INDUCES, and JSX](arthur_node_jsx_diagram_photoshopped.png)

![MVC Meme](mvc-meme.png)

### What is CRUD?

CRUD stands for Create, Read, Update, and Delete. It's a fundamental concept in web development that mirrors various HTTP actions:

| HTTP Action | CRUD Operator |
| ----------- | ------------- |
| GET         | Read          |
| POST        | Create        |
| PUT         | Update        |
| DELETE      | Delete        |

### Breaking It Down

**Create**: A Create or POST operation adds a new entry to a database. It involves sending data to a data source, typically from a form, to create a new entry.

**Read**: The Read or GET operation is familiar to anyone interacting with APIs. It allows users to view or read data from a source. It's akin to checking your email in the morning.

**Update**: Update or PUT works similarly to POST but updates an existing entry. It requires targeting a specific entry, often using an ID, and overwriting existing attributes.

**Delete**: As the name suggests, Delete removes data from a source. Like PUT, it targets a specific item for deletion.

### Demonstration

#### Describe REST and List the Various Routes

REST stands for Representational State Transfer. It defines principles for accessing and manipulating networked resources. There are seven RESTful routes that enable basic operations for managing data collections:

| URL              | HTTP Verb | Action  | Used For                                         |
| ---------------- | --------- | ------- | ------------------------------------------------ |
| /photos/         | GET       | Index   | Displaying a list of all photos                  |
| /photos/new      | GET       | New     | Displaying an HTML form for creating a new photo |
| /photos          | POST      | Create  | Creating a new photo                             |
| /photos/:id      | GET       | Show    | Displaying a specific photo                      |
| /photos/:id/edit | GET       | Edit    | Returning an HTML form for editing a photo       |
| /photos/:id      | PATCH/PUT | Update  | Updating a specific photo                        |
| /photos/:id      | DELETE    | Destroy | Deleting a specific photo                        |

#### What is Index and Show

![Index and Show](Screen Shot 2020-08-10 at 1 01 54 PM.png)

### Create an Index Route

To set up an Index route, follow these steps:

1. Create an Express app and define a set of resources (JavaScript array, for example).

   ```javascript
   const express = require("express");
   const app = express();

   const fruits = ["apple", "banana", "pear"];

   app.get("/fruits", (req, res) => {
     res.send(fruits);
   });

   app.listen(3000, () => {
     console.log("listening");
   });
   ```

## Create a Show Route

To create a Show route, use the following code:

```javascript
const express = require("express");
const app = express();

const fruits = ["apple", "banana", "pear"];

app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// Add the Show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
  console.log("listening");
});
```

Access the route at http://localhost:3000/fruits/1 (or any other index).

## Enhance the Data in Your Data Array

Currently, the fruits array contains only strings. You can enhance the data like this:

```javascript
const express = require("express");
const app = express();

const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  {
    name: "pear",
    color: "green",
    readyToEat: false,
  },
  {
    name: "banana",
    color: "yellow",
    readyToEat: true,
  },
];

app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
  console.log("listening");
});
```

## Define MVC and Explain Why It Matters

    One of the core tenets of good programming is to compartmentalize your code. This separation is vital to keep your codebase organized and maintainable.

    Models: Responsible for data (JavaScript variables).
    Views: Handle how data is displayed to the user (HTML).
    Controllers: Act as the glue that connects models with views and includes logic.
    This separation allows developers to collaborate effectively, minimize the risk of code conflicts, and specialize in specific areas.

## Move Our Data into a Folder Called Models

    Create a directory named models inside your app directory.
    Within the models directory, create a data file (e.g., fruits.js).
    Place your data (e.g., fruits array) inside the data file.

```javascript
const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  // ... (other data entries)
];

module.exports = fruits;
```

In your main server.js file, require the data file:

```javascript
const fruits = require("./models/fruits.js");
```

This structure allows you to have multiple variables in the data file, and you can specify which one to export and use in your main file.

## Essential Review Questions

        In your own words, describe MVC.
        What does the acronym INDUCES stand for?
        What is an Index Route, and how does it differ from a Show Route?
        Where do we get Fruit From?
