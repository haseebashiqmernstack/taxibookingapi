const Riders=require('../models/rider');

exports.registerRider= async (req,res)=>{
    const {fname,lname,username,fathername,email,password,contactNumber} = req.body;
    const rider= new Riders({
        fname,
        lname,
        username,
        fathername,
        email,
        password,
        contactNumber
    });

    await Riders.findOne({email:email})
    .exec( async (_error,_rider)=>{

        if(_error) {return await res.status(400).json({error:_error.message})}
            if(_rider)
            {
                        return await res.status(404).json({success:false,message:'rider already exist.'});
            }
            else{
                await rider.save(async (_error, _rid) => {
                    if (_error) { return await res.status(400).json({ error: _error.message }); }
                    if (_rid) { return await res.status(201).json({success:true, rider: _rid }); }
                });
            }

    });
}

exports.getRiders=async(req,res)=>{
    const riders=await Riders.find();
    return await res.status(200).json({riders})
}

exports.riderDelete=async (req,res) => {
    const id=req.params.id
    const del=await Riders.findById({_id:id})
    .exec(async (_error,_rider) =>{
            if(_error) {return res.status(400).json({_error:_error.message})}
            if(_rider)
            {
                   await Riders.updateOne({_id:id},{active:req.body.active});
            }
    })
}

exports.riderActive=async(req,res)=>{
    const id=req.params.id;
    await Riders.findOne({_id:id})
    .exec(async (_error,_rider)=>{
         if(_error) {return await res.status(400).json({_error:_error.message})}
         if(_rider)
         {
             await Riders.updateOne({_id:_rider._id},{active:req.body.active})
             .exec(async (_error,_rid)=>{
                if(_error) {return await res.status(400).json({_error:_error.message})}
                if(_rid)
                {
                    return await res.status(201).json({update:_rid})
                }
             })
         }
    })
}

exports.riderDeactive=async(req,res)=>{
    const id=req.params.id;
    await Riders.findOne({_id:id})
    .exec(async (_error,_rider)=>{
         if(_error) {return await res.status(400).json({_error:_error.message})}
         if(_rider)
         {
             await Riders.updateOne({_id:_rider._id},{active:req.body.active})
             .exec(async (_error,_rid)=>{
                if(_error) {return await res.status(400).json({_error:_error.message})}
                if(_rid)
                {
                    return await res.status(201).json({update:_rid})
                }
             })
         }
    })
}