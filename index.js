const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
// allow cors localhost
const allowedOrigins = ["https://localhost:5173"];
// Enable body parser
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public/dist")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
