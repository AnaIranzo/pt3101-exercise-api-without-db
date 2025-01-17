const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');


usersRouter.get('/', usersController.getUsers);

usersRouter.get('/users/:username?', usersController.getUser);
//http://localhost:3000/users/users/Artur_Zakharov
//http://localhost:3000/users/users/Jianping_Shemesh

usersRouter.get('/total/total',usersController.getTotal);
//http://localhost:3000/users/total/total

usersRouter.get('/country/:country', usersController.getCountry);
//http://localhost:3000/users/country/United%20States%20of%20America
//http://localhost:3000/users/country/somalia


usersRouter.get('/vehicles', usersController.getUVehicles);
//http://localhost:3000/users/vehicles/vehicles?min=1&max=6


usersRouter.get('/vehicles/vehicles', usersController.getUserVehicles);
//http://localhost:3000/users/vehicles/vehicles?fuel=diesel&manufacturer=Aston%20Martin&model=golf
//http://localhost:3000/users/vehicles/vehicles?fuel=Electric&manufacturer=Caterham&model=A4
//http://localhost:3000/users/vehicles/vehicles?fuel=Electric&model=a4
//http://localhost:3000/users/vehicles/vehicles?fuel=Electric&manufacturer=Caterham


usersRouter.post('/users', usersController.createUser);
//http://localhost:3000/users/users

usersRouter.put('/users/:username?',usersController.updateUser);
//http://localhost:3000/users/users/prueba_test

usersRouter.put('/users/:username/vehicles', usersController.updateVehicles);
//http://localhost:3000/users/users/prueba_test/vehicles


usersRouter.put('/users/:username/foods', usersController.updateFoods);
//http://localhost:3000/users/users/prueba_test/foods

usersRouter.put('/users/:username/hide', usersController.updateStatus);
//http://localhost:3000/users/users/prueba_test/hide

usersRouter.delete('/users/:username', usersController.deleteUser); 
//http://localhost:3000/users/users/prueba_test

module.exports = usersRouter;