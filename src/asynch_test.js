const prom1=new Promise((resolve, reject) => {
    if (true){
    setTimeout(() => {
        resolve('I am completed successfully');
    },1000);
} else{
    reject('I am failed');
}
});

prom1.then(val => val + ":::")
    .then(newVal => console.log(newVal))
    .catch(errorVal => console.log(errorVal));