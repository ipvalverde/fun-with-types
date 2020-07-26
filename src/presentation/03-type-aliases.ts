interface IVehicle { //Don't prefix it with an "I"
    make: string;
    model: string;
}

type Vehicle = IVehicle;



function getCarValuation(car: Vehicle) {
    car.make;
    // ...
}