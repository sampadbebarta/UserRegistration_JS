const UserRegistration = require('./UserRegistration')
let read = require('readline-sync');

console.log("****Welcome to user registration****")

let VALIDNAMEPATTERN = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
let VALIDEMAILPATTERN = new RegExp("^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$");
let VALIDMOBILEPATTERN = new RegExp("^[0-9]{2}[0-9]{10}");
let VALIDPASSWORD = new RegExp("^(?=.*[A-Za-z0-9!@#$%^&*])(?=.*[0-9])(?=.*[0-9a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");

const user = new UserRegistration();

function checkInput (question,regex) 
{
    let input = read.question(question)
    var result = user.patternMatching(input,regex)
    while(result == false)
    {
        let input = read.question(question)
        result = user.patternMatching(input,regex)
        if(result == true)
        {
            break;
        }
    }
}

checkInput('Enter First Name:',VALIDNAMEPATTERN);
checkInput('Enter Last Name:',VALIDNAMEPATTERN);
checkInput('Enter Mobile Number:',VALIDMOBILEPATTERN);
checkInput('Enter Password:',VALIDPASSWORD);