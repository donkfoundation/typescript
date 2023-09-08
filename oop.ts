export class Persona {
    private age: number;
    private name: string;
    private sex: string;

    constructor(age: number, name: string, sex: string) {
        this.age = age;
        this.name = name;
        this.sex = sex;
    }
};

class Animal {
    private type: string = 'dog';
    private name: string = 'max';
    private height: number = 100;
    private age: number = 2;

    public get getType() {
        return this.type;
    }

    public get getHeight() {
        return this.height;
    }

    // reserved word for set

    public set setType(type: string) {
        this.type = type;
    }

    // common way for setters

    public setHeight(height: number) {
        this.height = height;
    }
}

const perro1 = new Animal();

console.log(perro1.getType);
perro1.setType = 'row';
console.log(perro1.getType);


console.log(perro1.getHeight);
perro1.setHeight(9)
console.log(perro1.getHeight);

type PersonalInfo = {
    name: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    overage: boolean;
    programmingLanguages: Array<string>
}

class CreatePersonalInfo {
    private name: string;
    private lastName: string;
    private phoneNumber: number;
    private email: string;
    private age: number;
    private programmingLanguages: string[];

    constructor (
        name: string,
        lastName: string,
        phoneNumber: number,
        email: string,
        age: number,
        programmingLanguages: string[]
    ) {
        this.name = name,
        this.lastName = lastName,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this.age = age,
        this.programmingLanguages = programmingLanguages
    }

    private isOverAge() {
        if (this.age >= 18) {
            return true
        }

        return false;
    }

    private get getProgrammingLanguages(): string[] {
        return this.programmingLanguages;
    }

    public returnPersonalInfo(): PersonalInfo {
        return {
            name: this.name,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            overage: this.isOverAge(),
            programmingLanguages: this.getProgrammingLanguages
        };
    };
}

const personalInfo = new CreatePersonalInfo(
    'camilo', 'rojas', 12345, 'camilo@gmail.com', 18, ['java', 'ts', 'python', 'sql']
);

const pInfo: PersonalInfo = personalInfo.returnPersonalInfo();

console.info(pInfo);

