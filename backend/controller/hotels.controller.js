const { HotelModel } = require("../model/hotels.model")

const createHotel = async(req,res,next)=>{
    const newHotelDetails = req.body
    try {
        const savedHotel = new HotelModel(newHotelDetails)
        await savedHotel.save()
        console.log("Hotel Registered SucsessFully..!")
        res.status(200).json(savedHotel)
    } catch (error) {
        // res.status(500).json({"error":error})
        next(error)
    }
}

const updateHotel = async(req,res,next)=>{
    const getID = req.params.id
    const updateHotelDetails = req.body
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(getID, {$set:updateHotelDetails},{new:true})
        console.log("Hotel Updated SucsessFully..!")
        res.status(200).json(updatedHotel)  
    } catch (error) {
            // res.status(500).json({"error":error}) 
            next(error)
    }
}

const deleteHotel = async(req,res,next)=>{
    const getID = req.params.id
    try {
        await HotelModel.findByIdAndUpdate(getID)
        res.status(200).json("Hotel has been Deleted..!!")   
    } catch (error) {
            // res.status(500).json({"error":error}) 
            next(error)
    }
}


const getHotel = async(req,res,next)=>{
    const getID = req.params.id
    try {
       const getHotel =  await HotelModel.findById(getID)
        console.log("Here is the Hotle....")
        res.status(200).json(getHotel)   
    } catch (error) {
            // res.status(500).json({"error":error}) 
            next(error)
    }
}

const getAllHotel = async(req,res,next)=>{
    try {
        const getAllHotel =  await HotelModel.find()
         console.log("Here is the All Hotles....")
         res.status(200).json(getAllHotel)   
     } catch (error) {
         next(error)
             // res.status(500).json({"error":error}) 
     }
}

module.exports={createHotel, updateHotel, deleteHotel, getHotel, getAllHotel}