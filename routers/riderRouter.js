const router=require('express').Router();
const { registerRider, getRiders, riderDelete, riderActive, riderDeactive } = require('../controllers/riderController');
router.post('/rider/register',registerRider);
router.get('/rider/getRiders',getRiders);
router.patch('/rider/delete/:id',riderDelete);
router.patch('/rider/rideractive/:id',riderActive);
router.patch('/rider/riderdeactive/:id',riderDeactive);
module.exports=router;