const Vehicles = require('../models/vehicle');

exports.vehicleRegister=async (req,res) => {
    const {vehicleName,vehicleType,vehicleModel,vehicleNumber}=req.body;
//   console.log(vehicleName);
    const vehicle=new Vehicles({
        vehicleName,
        vehicleType,
        vehicleModel,
        vehicleNumber,
        active:"false"
    })

    await vehicle.save(async (_error,_vehicles) => {
        if(_error) {return await res.status(400).json({error:_error.message})}
        if(_vehicles) { return await res.status(201).json({_vehicles})}
    });
    
}

exports.updateVehicle= async (req,res) => {
    const id=req.params.id;
const {vehicleName,vehicleType,vehicleModel,vehicleNumber,active}=req.body;
    await Vehicles.findOne({_id:id})
    .exec( async (_error,_vehicle) => {
        if(_error) {return await res.status(400).json({error:_error.message})}
        if(_vehicle)
        {
            await Vehicles.updateOne({_id:id},{vehicleName,vehicleType,vehicleModel,vehicleNumber,active})
            .exec(async(_errors,_vehicles)=>{
                if(_errors) {return await res.status(400).json({error:_errors.message})}
                if(_vehicles)
                {
                  return await res.status(201).json({_vehicles})                    
                }
            })
        }
    })
}

exports.getVehicles=async (req,res) => {
    await Vehicles.find()
    .exec( async (_errors,_vehicles) => {
        if(_errors) {return await res.status(400).json({error:_errors.message})}
        if(_vehicles)
        {
          return await res.status(201).json({_vehicles})                    
        }
    })
}

exports.getVehicle= async (req,res) => {
     const id=req.params.id;
     await Vehicles.findOne({_id:id})
     .exec( async (_error,_vehicle) => {
        if(_error) {return await res.status(400).json({error:_error.message})}
        if(_vehicle)
        {
          return await res.status(201).json({_vehicle})                    
        }
     })
}

exports.vehicleActivate=async (req,res)=>{
    const id=req.params.id;
    await Vehicles.findOne({_id:id})
    .exec( async (_error,_vehicle) => {
        if(_error) {return await res.status(400).json({error:_error.message})}
        if(_vehicle)
        {
            await Vehicles.updateOne({_id:id},{active:req.body.active})
            .exec( async (_er,_veh) => {
                if(_er) {return await res.status(400).json({error:_er.message})}
                if(_veh)
                {
                    return await res.status(201).json({_vehicle:_veh})
                }
            })
        }
    })
}

exports.vehicleDeactivate=async (req,res)=>{
    const id=req.params.id;
    await Vehicles.findOne({_id:id})
    .exec( async (_error,_vehicle) => {
        if(_error) {return await res.status(400).json({error:_error.message})}
        if(_vehicle)
        {
            await Vehicles.updateOne({_id:id},{active:req.body.active})
            .exec( async (_er,_veh) => {
                if(_er) {return await res.status(400).json({error:_er.message})}
                if(_veh)
                {
                    return await res.status(201).json({_vehicle:_veh})
                }
            })
        }
    })
}


exports.vehicleDelete=async (req,res) => {

}