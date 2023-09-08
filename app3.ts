import { createInterface } from 'readline/promises';

const rl = createInterface ({
    input: process.stdin,
    output: process.stdout
});

let number1: number;
let number2: number;


async function getNumbers() {
    number1 = parseFloat(await rl.question('Ingrese el primer número: '));
    number2 = parseFloat(await rl.question('Ingrese el primer número: '));

    return {number1, number2};
}

async function makeOperation() {
    const {number1, number2} = await getNumbers();
    const text: string = '1. suma\n2. resta\n3. multiplicación\n4. división\n>';
    console.info('Ingrese operación a realizar');
    const operation = await rl.question(text);

    switch (parseInt(operation)) {
        case 1:
            return `La suma de ${number1} y ${number2} es igual a ${number1 + number2}`;
        case 2:
            return `La resta de ${number1} y ${number2} es igual a ${number1 - number2}`;
        case 3:
            return `La multiplicación de ${number1} y ${number2} es igual a ${number1 * number2}`;
        case 4:
            return `La división de ${number1} y ${number2} es igual a ${number1 / number2}`;
        default:
            return 'Opción incorrecta';
    }
}

async function showResult() {
    const message = await makeOperation();
    console.info(message);

    process.exit();
}

showResult();
/*

let num1: number;
let num2: number;
let result: number = 0;

async function readInput()  {

    num1 = parseInt(await rl.question('Ingrese número 1:'));
    num2 = parseInt(await rl.question('Ingrese número 2:'));

};

async function bucle() {
    while (result != 25) {
        await readInput();
        result = num1 + num2;
    }
    
    console.info(`Los números ${num1} y ${num2} sumados dan 25!`);
    process.exit();
}

bucle();
*/