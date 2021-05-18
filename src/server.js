'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());//post, put, patch
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');


const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
app.use(logger);
app.use('/api/v1/food', foodRoutes);
app.use('/api/v1/clothes', clothesRoutes);




app.get('/', homeHandler);

//functions

function homeHandler(req, res) {
  res.send('welcome in server.js :)');
}



app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => {
        console.log(`The server is listening on ${port}`);
    });
}

module.exports = {
    app: app,
    start: start
}