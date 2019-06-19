const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { db } = require('./db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/api').route);
const port = process.env.port || 3000;
db.sync().then(() => {
    app.listen(port);
    console.log('server start at port no.' + port)
})