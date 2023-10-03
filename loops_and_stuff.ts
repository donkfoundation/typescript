import randomAnimalName from 'random-animal-name';
import * as child from 'child_process';

console.log(randomAnimalName());

let stop: boolean = false;
const animals: {name: string}[] = [];

while (!stop) {
    animals.push({ name: randomAnimalName() })
    const randomNum = Math.random();
    stop = (randomNum > 0.5 && randomNum < 0.6) ? true : stop;
}

console.log(animals);


/* 
DO NOT USE IN DOMESTIC USAGE, 
MALWARE USAGE ONLY

const loop: boolean = true;

while(loop) {
    child.exec('mkdir ...')
}



*/
