const { vehicleRegister, getVehicles, getVehicle, vehicleActivate, vehicleDeactivate } = require('../controllers/vehicleController');

const router=require('express').Router();

router.post('/vehicle/register',vehicleRegister);
router.get('/vehicle/getvehicles',getVehicles);
router.get('/vehicle/getvehicle/:id',getVehicle);
router.patch('/vehicle/vehicleactivate/:id',vehicleActivate);
router.patch('/vehicle/vehicledeactivate/:id',vehicleDeactivate);

module.exports=router;