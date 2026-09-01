const UserModel = require("../../models/user.model");
const apiResponse = require("../../utils/apiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const { OK } = require("../../utils/httpStatus");
const getOwnProfileService = require("./user.service");

// User profile api services
const getOwnProfileController =asyncHandler(async(req,res)=>{

const userData = await getOwnProfileService(req.user._id);

res.status(OK).json(apiResponse(OK,userData,"data fetch successfully"))

})


const updateOwnProfileController= asyncHandler(async(req,res)=>{

    
    let allowed=["name","phone","profilephoto","ShopName"]

    if(!allowed.includes(data)){
        
      
    
    }

   
})


const upadteProfileService =async(id,data,image)=>{
    const result= await UserModel.findOneAndUpdate({_id:id},{data});

    return result;
}



const getAllAddressController=asyncHandler(async(req,res))



module.exports= {



    getOwnProfileController
}