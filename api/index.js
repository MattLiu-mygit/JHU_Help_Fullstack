const express = require('express');
const router = express.Router();

require('./routes/SGASurveyResults')(router);
require('./routes/maryland911alternatives')(router);
require('./routes/covid-19/mentalandemotional')(router);
require('./routes/covid-19/unstableincome')(router);
require('./routes/covid-19/resourceinsecurities')(router);
module.exports = router;
