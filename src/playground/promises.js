const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve();
        reject('nutt');
    }, 5000);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

