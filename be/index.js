const express = require('express');

const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/index');

const conn = require('./config/conn');

//config app
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

viewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
    res.send('api');
});

conn();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
