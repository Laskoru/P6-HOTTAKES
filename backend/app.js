const express = require("express");
const userRoutes = require("./routes/user");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hugo:Azerty12345@cluster0.hqdafpm.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue !" });
  next();
});
app.post("api/auth", userRoutes);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
});

module.exports = app;
