import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// correct file paths
const listFile = path.join(__dirname, "data", "restaurants.json");
const detailFile = path.join(__dirname, "data", "restaurantDetails.json");

app.get("/api/restaurants", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(listFile, "utf-8"));
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/restaurants/:id", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(detailFile, "utf-8"));
    const id = req.params.id;
    res.json(data[id] || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
