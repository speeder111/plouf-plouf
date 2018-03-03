'use strict';

/**
 * Checking config js existance
 */
const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname, `../config/index.js`);
if (!fs.existsSync(configPath)) {
  throw new Error(`You need to create the config/index.js file from index.js.example`);
}

/**
 * Loading dependencies
 */
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const express = require('express');
const http = require('http');
const logger = require('./logger');

/**
 * Creating the app
 */
const app = express();
app.use(bodyParser.json()); // for parsing application/json

/**
 * CORS options
 */
const corsOptions = {
  origin: config.host,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

/**
 * Configuring the app
 */
const port = (config.api && config.api.port) || 3001;
app.set('port', port);

/**
 * Adding the routes
 */
const routes = require('./routes');
app.use('/api', routes);

/**
 * Adding the response middleware
 */
const response = require('./response');
app.use(response);

/**
 * Starting the app
 */
const server = http.createServer(app);
server.listen(port, () => {
  const address = server.address();
  logger.info(`API up and running on ${address.address}:${address.port}`);
});
