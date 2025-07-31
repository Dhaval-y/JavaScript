(function chai(){
    console.log("I am an IIFE");    
}
)(); // Immediately Invoked Function Expression (IIFE)

((name) => {
    console.log(`Hello, ${name}!`);
})("Ujjwal"); // IIFE with an arrow function

(function() {
    const message = "This is a private message";
    console.log(message);
})(); // IIFE with a private scope