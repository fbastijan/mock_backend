import express from "express";
import {
  primjer_menu,
  menu_item,
  filtered_items,
  primjer_backup,
} from "./store";
import cors from "cors";

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati
app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
  res.statusCode = 201;
  res.send();
});
app.get("/login", (req, res) => {
  res.statusCode = 201;
  res.send(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
});
app.delete("/logout", (req, res) => {
  res.statusCode = 200;
  res.send();
});

app.get("/menu/:userId", async (req, res) => {
  res.send(json(primjer_menu));
});

app.get("/menu/:userId", async (req, res) => {
  let type = req.query.type;
  res.send(json(filtered_items + type));
});
app.get("/menu/backup/:userId", async (req, res) => {
  let type = req.query.type;
  res.send(json(primjer_backup));
});

//inicijaliziraj menu
app.post("/menu", (req, res) => {
  res.statusCode = 201;
  res.send();
});
app.post("/menu/:id/item", (req, res) => {
  res.statusCode = 201;
  res.send();
});
app.post("/menu/:id/backup", (req, res) => {
  res.statusCode = 201;
  res.send();
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
