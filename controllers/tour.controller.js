const tourModel = require("../models/tour.model")

let tours = []
exports.getTours = async (req,res) => {
    try{
        const tours = await tourModel.find({}); //{} encloses a filter
        return res.status(200).json({
            data: tours
        }) 
    } catch(error){
        return res.status(500).json({
            'message': 'Something went wrong !'
        });
    }
   
}

exports.createTours = async (req, res)=>{
    try{
        const reqBody= req.body;

    const result = await tourModel.create(reqBody);

    return res.status(201).json({

        data: result
    });}
    catch(error){
        return res.status(500).json({
            'message': error.message
        });
    } 
}



 exports.getToursByid = async (req,res)=>{
    try{
        const tourId= req.params.id;
        const tour = await tourModel.findById(tourId);
        if(!tour){
            return res.status(404).json({
                message: `Tour with this id not found: ${tourId}`
            });
        }

        return res.status(200).json({
            data: tour
        })
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
 }

    

 exports.patchTours = async (req,res)=>{
    try{
        const tourId = req.params.id;
        const reqBody=req.body;
        const result = await tourModel.findByIdAndUpdate(tourId, reqBody, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            data: result
        })
    } catch(error) {
        return res.status(500).json({
            data: error.message
        })
    }
 }

   

exports.deleteTours = async (req,res)=>{       //do the same try catch for delete and push the project to github and share to sushant sushanth@sap.com
    try{
        const tourId = req.params.id;
        const result = await tourModel.findByIdAndDelete(tourId);
        if(!tour){
            return res.status(404).json({
                message: `Tour with this id not found: ${tourId}`
            });
        }
        return res.status(204).end();
           
        } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}
    
    
  //  tours = tours.filter(tour => tour.id !== tourId);

   // return res.status(204).end();

