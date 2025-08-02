 const temp = 45
 if (temp > 30) {
   console.log("It's a hot day");
 }  

 const balance = 1000
 if( balance > 500) {
   console.log("You have a good balance");
 } 
 else if (balance < 500) 
 {
   console.log("You need to add more funds");
 } 

 else
     {
   console.log("Your balance is sufficient");
 }

 const userLoggedIn = true
 const dabitCard = true
 if (userLoggedIn && dabitCard  && 2!==3) {
   console.log("You can make a purchase");
 }
 else if (googleLogin || emailLogin) {
    console.log("You can login with Google or use your email");
 }