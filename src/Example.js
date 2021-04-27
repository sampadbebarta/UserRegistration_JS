const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");

console.log("Welcome to User Registration Problem");
readline.question("Enter your First Name:", (firstName) => {
    let checkFirstName = firstNameRegex.test(firstName);

    if(checkFirstName == true)
        console.log("FirstName is Valid");
    else
        console.log("FirstName is Invalid");

let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
readline.question("Enter your Last Name:", (lastName) => {

    let checkLastName = lastNameRegex.test(lastName);

    if(checkLastName == true)
        console.log("LastName is valid");
    else
        console.log("LastName is Ivalid name");
    readline.close();
    
})})