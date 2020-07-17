const express = require('express');
const router = express.Router();

require('./routes/SGASurveyResults')(router);
require('./routes/maryland911alternatives')(router);
module.exports = router;
