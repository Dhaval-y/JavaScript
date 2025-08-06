console.log("Hello js!");

arr = [1, 2, 3, 4, 5];
arr1 = [6, 7, 8, 9, 10];

setTimeout(() => {
    const  array =  arr + arr1
    console.log(`Array is ${ array }`);
}
,2000);
