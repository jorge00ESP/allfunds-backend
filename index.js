require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')

const corsOptions = {
    origin: "*"
};

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.on('open', () => console.log("Connected to mongo database"));

app.use(cors(corsOptions));
app.use(express.json());

const routeNews = require("./routes/new.routes");
app.use('/news', routeNews);

app.listen(3000, () => {
   console.log('Server started')
})