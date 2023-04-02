const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const pkg = require('body-parser');
const routes = require('./routes.js');

dotenv.config();
const { urlencoded } = pkg;

const server = express();
server.use(cors());
server.use(urlencoded({extended: false}));

server.use(express.json());
server.use('/', routes);

server.listen(process.env.PORT, () => {
    console.log(`Server running on: http://localhost:${process.env.PORT}`);
})

