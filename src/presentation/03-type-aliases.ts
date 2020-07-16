interface IVehicle { //Don't prefix it with an "I"
    make: string;
    model: string;
}

type Vehicle = IVehicle;



// interface IVehicle {
//     reg: string;
//     year: number;
//     originalPrice: number;
// }

// function getCarValuation(car: IVehicle) {
//     // ...
// }