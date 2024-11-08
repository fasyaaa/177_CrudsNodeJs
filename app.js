// file app.js
const express = require('express');
const app = express();

const todoRoutes = require("./routers/tododb.js");
require('dotenv').config();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port,