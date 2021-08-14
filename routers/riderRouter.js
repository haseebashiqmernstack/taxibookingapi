const router=require('express').Router();
const { registerRider, getRiders, riderDelete } = require('../controllers/riderController');
router.post('/rider/register',registerRider);
router.get('/rider/getRiders',getRiders);
router.patch('/rider/delete/:id',riderDelete);

module.exports=router;