const router=require('express').Router();
const {registerDriver, getDrivers}=require('../controllers/driverController');
router.post('/driver/register', registerDriver);
router.get('/driver/getDrivers',getDrivers);

module.exports=router;