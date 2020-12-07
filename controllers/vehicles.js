const vehicles = require('../data/vehicles');

const list = (req, res) => {
    res.json(vehicles)
};

const show = (req, res) => {
    const vehicleId = req.params.id
    for (let vehicle of vehicles) {
        if (vehicle._id === parseInt(vehicleId)) {
            res.json(vehicle)
        }
    }
};

const create = (req, res) => {
    const newVehicle = {
      _id: vehicles.length + 1,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
    }
    
    if(!newVehicle.year || !newVehicle.make || !newVehicle.model ){
      return res.status(400).json({ msg: "Please include: year, make and model" });
    }
  
    vehicles.push(newVehicle)
    res.json(vehicles)
};

module.exports = {
    list,
    show,
    create
};