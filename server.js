const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");

//Express server
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.static("public"));
//responses compress
app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// when deployed to heroku, use the deployed database. Otherwise use the local workout database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  seCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(require("./routes/api-routes"));
app.use(require("./routes/html"));

app.listen(PORT, function() {
  
  console.log(`App listening on: http://localhost:${PORT}`);
});