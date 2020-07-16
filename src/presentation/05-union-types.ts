type Bird = {
    species: string;
    isSingingBird: boolean;
}

type Airplane = {
    model: string;
    seats: number;
}

type Superman = {
    dateOfBirth: Date;
    socialSecurityNumber: string;
}

type FlyingObject = Bird | Airplane | Superman;

// const instance: FlyingObject = {
// };
printFlyingObject({ species: "nightingale", isSingingBird: true });
printFlyingObject({ model: "Airbus S60", seats: 250 });
printFlyingObject({ socialSecurityNumber: "529-10-6071", dateOfBirth: new Date(1960, 2, 20) });


function printFlyingObject(flyingObject: FlyingObject) {
    if ("model" in flyingObject) {
        printAirplane(flyingObject);
    }
    else if ("species" in flyingObject) {
        printBird(flyingObject);
    }
    else {
        printSuperman(flyingObject);
    }
}





function printAirplane(a: Airplane) {
    console.log(`Airplane (model: '${a.model}', seats: '${a.seats}')`);
}
function printBird(b: Bird) {
    console.log(`Bird (species: '${b.species}', isSingingBird: '${b.isSingingBird}')`);
}
function printSuperman(s: Superman) {
    console.log(`Superman (SSN: '${s.socialSecurityNumber}', DoB: '${s.dateOfBirth.toDateString()}')`);
}