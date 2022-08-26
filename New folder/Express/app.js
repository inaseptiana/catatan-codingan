const express = require("express");
const app = express();

let movies = [
  { id: 1, title: "Thor" },
  { id: 2, title: "true beauty" },
  { id: 3, title: "Minions" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hallo ini dari express");
});

app.get("/user", (req, res) => {
  res.json("ini data user nama");
});

app.get("/movies", (req, res) => {
  res.json(movies);
});
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((item) => item.id == id);
  res.json(movie);
});

app.post("/movies", (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.json("berhasil menambah movie");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
