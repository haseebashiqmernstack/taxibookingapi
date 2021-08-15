const { bookingRides, getBookngRides, rideConfirm, getBookingRideInfo, rideCancel } = require('../controllers/bookingController');

const router=require('express').Router();

router.post('/booking/register',bookingRides);
router.get('/booking/getbookingRides',getBookngRides);
router.get('/booking/getbookingrideinfo/:id',getBookingRideInfo);
router.patch('/booking/rideconfirm/:id',rideConfirm);
router.patch('/booking/ridecancel/:id',rideCancel);

module.exports=router;