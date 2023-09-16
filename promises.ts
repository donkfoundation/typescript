const paid = false;

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (paid) {
            resolve('the person paid the money');
        } else {
            resolve('the person did not paid the money');
        }
    }, 2000);
});

promiseOne.then(console.log).catch(console.log);

// no le importa si la promesa termina o no, no genera un proceso bloqueante

(
    async() => {
        const result = await promiseOne;   
        console.info(result);
        console.log("hola");
    }
)();

const firstPromise = new Promise(
    (resolve) => {
        setTimeout(() => { 
            resolve('first promise resolved');
        }, 2000 );
    }
);

const seconfPromise = new Promise(
    (resolve) => {
        setTimeout(() => { 
            resolve('second promise resolved');
        }, 2000);
    }
);

// se intuye que el primer valor que se le pasa a la promesa es resolved y el segundo es rejected, pese al nombre el primero es fulfilled y el segundo rejected.

const thirdPromise = new Promise(
    (resolve, rejected) => {
        setTimeout(() => { 
            rejected('third promise resolved');
        }, 1000);
    }
);

(
    async() => {
        await Promise.race([
            firstPromise,
            seconfPromise,
            thirdPromise
        ]).then(console.log).catch(console.log);
    }
)();
