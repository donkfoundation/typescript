import { createInterface } from 'readline/promises';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


async function readInput(): Promise<Record<string, string>> {
    const name = await rl.question('Input name: ');
    const age = await rl.question('Input age: ');

    return { name, age }
}

async function calculateIfAdult(): Promise<string> {
    const {name, age} = await readInput();

    if (parseInt(age) >= 18) {
        return `The person ${name} is overage`; 
    } else {
        return `The person ${name} is underage`;
    }

}

async function showResult(): Promise<void> {
    const message = await calculateIfAdult();
    console.info(message);  

    process.exit(0);
}

showResult();
// calculateIfAdult().then(console.info).catch(console.error)

const isOverAge = (age: number, name: string): void => {
    if(age > 18) {
        console.info(`${name} is overage`);
    } else {
        console.info(`${name} is underage`);
    }
}

isOverAge(20, 'Mateo');