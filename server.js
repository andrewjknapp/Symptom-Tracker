const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get('/hello', function(req, res) {
//   res.json({hello: "hello"})
// })

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/symptomtracker_db");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
