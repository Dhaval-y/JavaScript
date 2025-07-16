const amt =100
console.log(amt);

const amt2 = new Number(200)
console.log(amt2);

console.log(amt.toPrecision(1));


//Maths
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(10.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));

const randomVal = Math.random(); 
console.log(randomVal);
console.log( (randomVal * 10) + 1 ); // Random number between 1 and 10

// To generate a random number between 1 and 6, can use :

const min = 1
const max = 7 
console.log(Math.floor((Math.random()) * (max - min) + min)); // Random number between 1 and 10
