//Ejercicios parte 1

//Primero
/*
const myPromise =  new Promise((res, rej) => {
    setTimeout(() => {
        res('Success')
        }, 850)
});

async function getResult() {
    const result = await myPromise;
    console.log('Result:', result) // log: 'Result: Success'
}

getResult();
*/

//Segundo
/*
const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
        success(1)
    }, 1000)
})

async function getResult() {
        const result = await myPromise as number;
        const result2 = result + 2;
        console.log('Result:', result2) // log: 'Result: 3'
};

getResult();
*/

//Tercero
/*
const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
        success(1)
    }, 1000)
})

async function getResult() {
        const result = await myPromise as number;

        const result2 = result + 2;

        return result2;
    }

    getResult().then((result) => {
        console.log('Result:', result) // log: 'Result: 3'
    })
*/

//Cuarto
/*
const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
        reject('error!')
    }, 1000)
})

async function getResult() {
    try {
            const result = await myPromise
            console.log(result)
    } catch(myPromise) {
            console.error(err)
        }
    }
    getResult();
*/

//Ejercicios parte 2

//Primero
/*
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('success')
    }, 500)
});

async function getResult() {
    const result = await myPromise
    console.log("This is a ", result);
    const result2 = await result;
    console.log(result2);
}

getResult();
*/

//Segundo

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve(1)
        } else {
            reject('An error has occurred')
        }
    }, 500)
})

async function getResult(){
    try {
        const result = await myPromise;
        return result + 1;
        const result2 = await result;
        console.log(result2);
    } catch(err){
        console.log(err);
    }



}
