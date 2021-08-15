require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const driverRouter = require('./routers/driverRouter');
const bookingRouter = require('./routers/bookingRouter');
const riderRouter = require('./routers/riderRouter');
const vehicleRouter = require('./routers/vehicleRouter');
require('./db/dbConnection').init();
const apps = express();
const port = process.env.PORT || 5000;
apps.use(cors());
apps.use(express.json());
apps.use(cookieParser());

apps.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', apps.get('port'));
});


apps.use('/api', driverRouter);
apps.use('/api', bookingRouter);
apps.use('/api', riderRouter);
apps.use('/api', vehicleRouter);
apps.listen(port, () => console.log(`server is running on ${port}`));