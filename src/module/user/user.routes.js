const express = require('express')
const userController =require("./user.controller");
const validattionMiddleware = require('../../middlewares/authenticate.middleware');
const { upload } = require('../../middlewares/upload.middleware');
const UserRouter = express.Router();

UserRouter.use(validattionMiddleware);


UserRouter.get("/me",userController.getOwnProfileController)

UserRouter.patch("/me",userController.updateProfileController)




UserRouter.post("/me/addresses",userController,)


//++++ admin ++++

UserRouter.patch("/:id/status",userController.updateUserStatusController);

UserRouter.delete("/:id/status",userController.deleteUserStatusController);


UserRouter.delete("/:id",userController.deleteUserController);

UserRouter.get("/",userController.deleteUserStatusController);


UserRouter.patch("/me",upload)


module.exports= UserRouter;