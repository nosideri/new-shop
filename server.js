var data = require("./src/components/mockData/data.json");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  return res.send(data);
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;

  const item = data.find((item) => item.id === +id);

  return res.send(item);
});

app.listen(3005, () => console.log(`Example app listening on port ${3005}!`));
