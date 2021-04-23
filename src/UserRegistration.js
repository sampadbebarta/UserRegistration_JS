const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


const firstNameRegex = new RegExp("([A-Z][a-z]{3,})");

readline.question("Enter your First Name:", (n) => {
    var result = firstNameRegex.test(n);
    //console.log(result);
    if(result==true)
        console.log("Your Input is Valid");
    else
        console.log("Your Input is Invalid");



    readline.close();
});