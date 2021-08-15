const Bookings = require('../models/booking');

exports.getBookngRides=async(req,res)=>{
    const bookings=await Bookings.find();
    return res.status(200).json({bookings})
}
exports.bookingRides= async (req,res) => {

const {riderName,bookingNumber,email,phone,airport,passengers,champagne,flowerBouquet}=req.body;

const booking=new Bookings({
    riderName,
    bookingNumber,
    email,
    phone,
    airport,
    passengers,
    champagne,
    flowerBouquet,
    isConfirm:"false"
});

await booking.save( async (_error,_bookings) => {
    if(_error) {return await res.status(400).json({error:_error.message})}
    if(_bookings) { return await res.status(201).json({_bookings})}
})

}

exports.getBookingRideInfo=async(req,res)=>{
await Bookings.findOne({_id:req.params.id})
.exec(async (_error,_booking)=>{
      if(_error){return await res.status(400).json({message:_error.message})}
      if(_booking)
      {
        console.log(_booking)
          return await res.status(200).json({booking:_booking})
      }
})
}

exports.rideConfirm=async(req,res)=>{
    const id=req.params.id;
    await Bookings.findOne({_id:id})
    .exec(async (_error,_booking)=>{
         if(_error) {return await res.status(400).json({_error:_error.message})}
         if(_booking)
         {
             await Bookings.updateOne({_id:_booking._id},{isConfirm:req.body.isConfirm})
             .exec(async (_error,_bookingRide)=>{
                if(_error) {return await res.status(400).json({_error:_error.message})}
                if(_bookingRide)
                {
                    return await res.status(201).json({updated:_bookingRide})
                }
             })
         }
    })
}

exports.rideCancel=async(req,res)=>{
    const id=req.params.id;
    await Bookings.findOne({_id:id})
    .exec(async (_error,_booking)=>{
         if(_error) {return await res.status(400).json({_error:_error.message})}
         if(_booking)
         {
             await Bookings.updateOne({_id:_booking._id},{isConfirm:req.body.isCancel})
             .exec(async (_error,_bookingRide)=>{
                if(_error) {return await res.status(400).json({_error:_error.message})}
                if(_bookingRide)
                {
                    return await res.status(201).json({updated:_bookingRide})
                }
             })
         }
    })
}