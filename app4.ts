import { createInterface } from 'readline/promises';

const rl = createInterface ({
    input: process.stdin,
    output: process.stdout
});

var num1: number;
var numaAdivinar:number = Math.floor(Math.random() * 51);

async function getNumber() {
    num1 = parseInt(await rl.question('Ingrese número a adivinar: '));
    console.info(numaAdivinar);
}

async function validate() {
    while (num1 != numaAdivinar) {

        await getNumber();
        
        if (num1 == numaAdivinar) {
            console.info('Adivinaste');
            process.exit();
        } else {
            if ((numaAdivinar - num1) <= -10) {
                console.info('Estás por encima pero lejos\n');        
            } else {
                if ((numaAdivinar - num1) <= 0) {
                    console.info('Estás por encima pero cerca\n');
                } else {
                    if ((numaAdivinar - num1) >= 10) {
                        console.info('Estás por debajo pero lejos\n');
                    } else if ((numaAdivinar - num1) >= 0) {
                        console.info('Estás por debajo pero cerca\n');
                    }
                }
            }
        }
    }
}

validate();