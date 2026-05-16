const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const users = [
    { id: 1, name: "anuj", email: "anuj@gmail.com" },
    { id: 2, name: "anuj1", email: "anuj1@gmail.com" },
    { id: 3, name: "anuj2", email: "anuj2@gmail.com" },
  ];

  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
