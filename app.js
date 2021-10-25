const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require('cors')
const numbers = require('./src/routes/routes')

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use('/api/v1', numbers)

module.exports = app
