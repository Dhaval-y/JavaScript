function sayMyName(){
    console.log("U");
    console.log("J");
    console.log("J");
    console.log("W");
    console.log("A");
    console.log("L");
}

//sayMyName(); 

function addTwoNumbers(a, b) {
    c = a + b;
    console.log(c);
}

//addTwoNumbers(3,4)

function loginUserMessage(username) {
    return `${username} logged in successfully`
}

//console.log(loginUserMessage("ujjwal"))

const user = {
    username: "Ujjwal",
    price: 100,
}

function userInfo(anyobject){
    console.log(`Username is ${anyobject.username}`);
    console.log(`Price is ${anyobject.price}`);
}

userInfo(user); 

const newArr = [200,400,600,800]

function getSecondValue(arr){
    return arr[1];
}

console.log(getSecondValue(newArr));