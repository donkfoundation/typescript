type ObjectInfo = {
    vehicle: string,
    job: string,
    yearsOfExperience: number
}

// los objetos que deriven de ObjectInfo van a llevar solo esas propiedades

const object1: ObjectInfo = {
    vehicle: "mazda",
    job: "soft",
    yearsOfExperience: 1
}

console.log(object1.job)

enum Genre {
    horror = 'horror',
    adventure = 'adventure',
    action = 'action',
    rpg = 'rpg'
}

enum Rating {
    BAD,
    MEDIOCRE,
    GOOD,
    GREAT
}

type Consola = {
    name: string;
    yearOfRelease: Date;
}

type Videogame = {
    name: string;
    dateOfRelease: Date;
    copiesSold: number;
    genre: Genre;
    rating: Rating;
    consoles: Consola[] | Consola;
}

const Metroid: Videogame = {
    name: 'Super Metroid',
    dateOfRelease: new Date('03/19/1994'),
    copiesSold: 1420000,
    genre: Genre['action'],
    rating: Rating['GREAT'],
    consoles: {
        name: 'SNES',
        yearOfRelease: new Date('1994')
    }
}

console.log(Metroid)

// limita que una variable sea de tipo indefinido o del tipo pasado entre las <>

type Generico<T> = T | undefined;

let var1:Generico<string> = 'hola';
let var2:Generico<string> = undefined;

