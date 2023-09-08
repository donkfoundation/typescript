import { createInterface } from 'readline/promises';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getGrades(): Promise<Array<number>> {
    const notas: Array<number> = [];

    for (let i = 0; i < 5; i++) {
        notas[i] = parseFloat(await rl.question('Ingrese la nota número 1: '));
    }

    return notas
}


async function calculations() {
    const notas = await getGrades();
    
    const suma =  notas.reduce((prev: number, curr: number) => prev + curr, 0);
    return (suma / notas.length) > 3.5 ? `The student passed with ${suma / notas.length}` : `The student failed with ${suma / notas.length}`;
}

async function showResult() {
    const message = await calculations();
    console.info(message);

    process.exit();  
}

showResult();