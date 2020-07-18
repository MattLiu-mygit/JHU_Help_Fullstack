const express = require('express');
const router = express.Router();

require('./routes/SGASurveyResults')(router);
require('./routes/maryland911alternatives')(router);
require('./routes/covid-19/mentalandemotional')(router);
module.exports = router;
