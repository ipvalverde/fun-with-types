interface Car {
    make: string;
    price: number;
    year: number;
    wheels: number;
    seats?: number;
}

interface Motorcycle {
    make: string;
    price: number;
    year: number;
    wheels: number;
}

isCar({ make: "Peugeot", price: 25000, year: 2015, wheels: 4 });
// getValuation({ make: "Honda", price: 5600, year: 2018, wheels: 2 });

function isCar(vehicle: Car | Motorcycle) {
    if ("seats" in vehicle) {
        console.log("vehicle is a car. Right???");
    }
    else {
        console.log("vehicle is a motorcycle");
    }
}

function getValuation(vehicle: Car | Motorcycle) {
    let yearlyDepreciation: number = 0;
    // if (???) {
    //     // For cars
    //     console.log(`CAR: ${JSON.stringify(vehicle)}`);
    //     // vehicle.seats;

    //     yearlyDepreciation =
    //         vehicle.make === "Peugeot" ?
    //         (vehicle.price * .15) :
    //         (vehicle.price * .07);
    // }
    // else {
    //     // For motorcycles
    //     console.log(`MOTORCYCLE: ${JSON.stringify(vehicle)}`);

    //     yearlyDepreciation = vehicle.price * .10;
    // }

    const currentYear = new Date().getFullYear();
    const yearDiff = currentYear - vehicle.year;
    return vehicle.price - (yearDiff * yearlyDepreciation);
}