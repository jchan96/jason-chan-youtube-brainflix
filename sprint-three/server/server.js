const express = require("express");
const app = express();

// console.log("hi");

// require("dotenv").config();
// // desctructure the variables from .env file
// const { PORT, BACKEND_URL } = process.env;

// // cross origin resource sharing
const cors = require("cors");
app.use(cors());

// // express.urlencoded alows posting form data
app.use(express.urlencoded({ extended: true }));
// // in order to access req.body you need to use express.json() middleware
app.use(express.json());
// // serve public files e.g. index.html
app.use(express.static("public"));

// console.log("hi");
// // get, post, put methods for /api/videos
const videoRoutes = require("./routes/api/videos");
app.use("/api/videos", videoRoutes);

// // start the server and listen on port 5000
app.listen(5000, () => {
  console.log(`server is running at: 5000`);
});
