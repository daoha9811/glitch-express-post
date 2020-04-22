// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

let data = ['di cho', 'nau com', 'rua bat', 'hoc code o codersX'];

app.get("/todos", (req, res) => {
  let q = req.query.q || '';
  let filterData = data.filter(d => {
    return d.toLowerCase().indexOf(q.toLowerCase()) != -1;
  });
  res.render("todos", {data: filterData});
});

app.post("/todos/create", (req, res) => {
  let newTodo = req.body.todo;
  if(newTodo) {
    data.push(newTodo);
  }
  res.redirect("back");
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

