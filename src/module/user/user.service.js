const UserModel = require("../../models/user.model");
const apiError = require("../../utils/apiError");
const { NOT_FOUND } = require("../../utils/httpStatus");

const getOwnProfileService = async (userId)=>{

const result = await UserModel.findById(userId);
if(!result){
    throw apiError(NOT_FOUND,"user not foundf")
}
return result;

};

const updateProfileService=async(data,iamge)=>{
    
}


const deleteAdressesService=async(userId,addressId)=>{
    const userdata = getOwnProfileService(userId);


    const addresses=(await userdata).addresses.id(addressId);
    if(!address){
        throw apiError(NOT_FOUND,"address not found")
    }
}


const wasDefault = address.isDefault;
address.deleteOne();
if(userdata.addresses.lengt  > 0  && wasDefault === true){
    userdata.addresses[0].isDefault = true;
}
await userdata.save();


return userdata;




module.exports= getOwnProfileService;
