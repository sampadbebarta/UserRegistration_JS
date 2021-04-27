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


let mailregex = RegExp("^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$");
readline.question("Enter your Email id:", (lastName) => {
        let checkEmail = mailregex.test(email);
        if(checkEmail == true)
            console.log("Email id is Valid");
        else
            console.log("Email id is Invalid");
    readline.close();


})})})