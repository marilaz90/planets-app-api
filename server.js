// server.js
const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

const { planets } = require("./data");

// Use cors middleware
app.use(cors());

app.get("/api/planets", (_req, res) => {
  try {
    res.json(planets.map((planet) => ({ id: planet.id, name: planet.name })));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/planet/:id", (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((planet) => planet.id === planetId);
  // Fetch details for the planet from another API
  // For now, just sending the planet name
  res.json(planet);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
