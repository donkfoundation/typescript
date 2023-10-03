const orderNums = <t> (...nums: t[]): t[] => nums.sort();

console.log(orderNums<number>(8,6,1,4,2));

function addTwoThings(a: number, b: number): number;
function addTwoThings(a: string, b: string): string;
function addTwoThings(a: boolean, b: boolean): boolean;

function addTwoThings(a: any, b: any): any {
    return a + b;
}

console.log(addTwoThings(false, false));

// functions that receive functions as parameters

type Vehicle = {
    name: string,
    year: number
}

const validateIfModern = (year: number): boolean => (year >= 2020); 

const vehicleInformation = (
    carData: Vehicle, 
    fun: (year: number) => boolean
): string => {
    return `Car: ${carData.name} is from ${carData.year} and is it modern: ${fun(carData.year)}`;
}

console.log(vehicleInformation({ name: 'Mercedes', year: 2020 }, validateIfModern));

// functions that return other functions

const promiseTest = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved('all good');
    }, 2000);
})

const resolvePromise = (/* {config: possible general config data} */) => 
    async (/* specific config data */) => {
        const result = await promiseTest;

        return result;
    }

const result = resolvePromise()
console.log(result)

/* 
function 1() {
    result(specific config data)
}

function 1() {
    result(another specific config data)
}
*/

const returnMessage = (message: string) => `${message} day of the week`;

const evaluateDayOfTheWeek: Record<string, () => string> = {
    /* If the value of the key is the function returnMessage itself what you get in return is a string, but since the value is an 
    anonymous function what we get is a function instead we have to call after calling the object.
    */
    'Sunday': (() => returnMessage('first')),
    'Monday': (() => returnMessage('second')),
    'Tuesday': (() => returnMessage('third')),
    'Wednesday': (() => returnMessage('fourth')),
    'Thursday': (() => returnMessage('fifth')),
    'Friday': (() => returnMessage('sixth')),
    'Saturday': (() => returnMessage('seventh'))
}

let dayOfWeek = 'thusday';

dayOfWeek = 'Wednesday';

/* Note the last parenthesis, we have to call the function since the value we get is a function not the returned value of returnMessage*/
console.log(evaluateDayOfTheWeek[dayOfWeek]())