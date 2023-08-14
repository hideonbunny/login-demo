//make connection with mysql server
const express = require("express");
const app = express();
const cor = require("cors");
const mysql = require("mysql");
app.use(cor());
app.use(express.json());
const db = mysql.createConnection({
  host: "root",
  host: "localhost",
  password: "",
  database: "test",
});

app.post("/signup", (req, res) => {
  const name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
