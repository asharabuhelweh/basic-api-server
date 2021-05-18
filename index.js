const server = require('./src/server.js');
require('dotenv').config();
const port = process.env.PORT || 5050 ;

server.start(port);