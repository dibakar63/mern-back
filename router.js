const productcontroller=require('./controller');
const authController=require('./authcontroller')
const router=require('express').Router();
//auth routes
router.post('/register',authController.registerController)
router.post('/login',authController.loginController)


//prodct routes
router.post('/add',productcontroller.userController);
router.get('/get',productcontroller.getAllData);
router.get('/get/:id',productcontroller.getById);
router.put('/update/:id',productcontroller.updateUsers);
router.delete('/delete/:id',productcontroller.deleteUsers);


module.exports=router