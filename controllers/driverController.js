const Drivers=require('../models/driver');

exports.registerDriver= async (req,res)=>{
    const {fname,lname,username,fathername,email,contactNumber} = req.body;
    const driver= new Drivers({
        fname,
        lname,
        username,
        fathername,
        email,
        password:'',
        contactNumber
    });

    await Drivers.findOne({email:email})
    .exec( async (_error,_driver)=>{

        if(_error) {return await res.status(400).json({error:_error.message})}
            if(_driver)
            {
                        return await res.status(404).json({success:false,message:'driver already exist.'});
            }
            else{
                await driver.save(async (_error, _dri) => {
                    if (_error) { return await res.status(400).json({ error: _error.message }); }
                    if (_dri) { return await res.status(201).json({success:true, drivers: _dri }); }
                });
            }

    });
}

exports.getDrivers=async(req,res)=>{
    const drivers=await Drivers.find();
    return await res.status(200).json({drivers})
}