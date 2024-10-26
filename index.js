require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.on('open', () => console.log("Connected to mongo database"));

app.use(express.json());

const routeNews = require("./routes/new.routes");
app.use('/news', routeNews);

app.listen(3000, () => {
   console.log('Server started')
})