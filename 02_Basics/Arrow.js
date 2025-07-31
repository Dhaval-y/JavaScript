const func = function(){
    console.log(this);
}

func()

const addTwoNumbers = (a, b) => {   //Arrow function 
    console.log(a+b);
}

addTwoNumbers(5, 10);