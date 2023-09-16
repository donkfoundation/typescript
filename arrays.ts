let numericArray: Array<number> = [1, 3, 5, 7, 9];

numericArray.forEach((number, index) => {
    const exponential: number = number ** 2;
    console.log(`number: ${number}, index: ${index}, exponential: ${exponential}`);
})

type PInfo = {
    name: string;
    lastName: string;
}

const pinfoArray: Array<PInfo> = [
    {
        name: "Mathew",
        lastName: "G"
    },
    {
        name: "Camilo",
        lastName: "R"
    }
]

pinfoArray.forEach((personalInfo) => {
    personalInfo.name += "troll";
});

console.log(pinfoArray);

enum PetType {
    CAT = 'cat',
    DOG = 'dog',
    TURTLE = 'turle'
}

type Vaccines = {
    name: string;
    date: Date;
}

type PetInfo = {
    name: string;
    breed: PetType;
    vaccines: Vaccines[] | Vaccines;
}

const pet1: PetInfo = {
    name: 'max',
    breed: PetType["CAT"],
    vaccines: 
    {
        name: "rabies",
        date: new Date("5/5/2023")
    }
    // {
    //     name: "covid",
    //     date: new Date("1990")
    // }
}


console.log(pet1);

if (pet1.vaccines instanceof Array) {
    console.log("es un arreglo!");
} else {
    console.log(typeof pet1.vaccines);
}