// Promise

let log = console.log;



// 1 TASK
let promiseClean = new Promise((resolve, reject) => {

    setTimeout(() => {
        let isClean = true;
        if(isClean) {
            resolve('Clean')
        } else {
            reject('not Clean')
        }
    }, 10000)    

})

promiseClean.then((fromResolve) => {
    log(`1 TASK. is ${fromResolve}`)
}).catch((fromReject) => {
    log(`1 TASK. is ${fromReject}`)
})

// =====================


// 2 TASK

let cleanRoom = () => {
    return new Promise((resolve, reject) => {

        log(`thinking (1) start...`)

        setTimeout(() => {
            resolve(`1. Clean Room`)
            log(`thinking (1) end 3000ms`)
        }, 3000)

    });
}

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {

        log(`thinking (2) start...`)

        setTimeout(() => {
            resolve(`${message} \n2. Remove Garbage`)
            log(`thinking (2) end 4000ms`)
        }, 4000);

    });
}

let buyIcecream = (message) => {
    return new Promise((resolve, reject) => {

        log(`thinking (3) start...`)
        
        setTimeout(() => {
            resolve(`${message} \n3. Buy Icecream`)
            log(`thinking (3) end 5000ms`)
        }, 5000)

    });
}

cleanRoom()
    .then((result) => {
        return removeGarbage(result);
    })
    .then((result) => {
        return buyIcecream(result);
    })
    .then((result) => {
        log(`Finished \n${result}`)
    })

// Запускаются одновременно

// Promise.all([cleanRoom(), removeGarbage(), buyIcecream()])
//     .then(() => {
//         log(`all finished`)
//     })
//     .catch(() => {
//         log(`Err`)
//     })



let timer = 1;
let intervalID = setInterval(() => {
    if(timer < 5) log(timer)
    else clearInterval(intervalID)
    timer += 1
}, 1000)