const assert = require('chai').assert;
const utility = require('../src/UserRegistration')
let VALIDNAMEPATTERN = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
let VALIDEMAILPATTERN = new RegExp("^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$");
let VALIDMOBILEPATTERN = new RegExp("^[0-9]{2}[0-9]{10}");
let VALIDPASSWORD = new RegExp("^(?=.*[A-Za-z0-9!@#$%^&*])(?=.*[0-9])(?=.*[0-9a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");

describe('Testing the check pattern method',function(){
    it('Check First Name string',function(){
        const fName = utility.patternMatching('Sampad',VALIDNAMEPATTERN);
        console.log('First Name is :',fName);
        assert.equal(fName,true)
    })
    it('Check Last Name String',function(){
        const lName = utility.patternMatching('Bebarta',VALIDNAMEPATTERN);
        console.log('Last Name is:',lName);
        assert.equal(lName,true)
    })
    it('Check Email Id',function(){
        const email = utility.patternMatching('bebartasampad@gmail.com',VALIDEMAILPATTERN);
        console.log('Email Id is:',email);
        assert.equal(email,true)
    })
    it('Check Valid Mobile Number',function(){
        const mobile = utility.patternMatching('919348239407',VALIDMOBILEPATTERN);
        console.log('Mobile Number is:',mobile);
        assert.equal(mobile,true)
    })
    it('Check Password',function(){
        const password = utility.patternMatching('Bebarta@97',VALIDPASSWORD);
        console.log('Password is:',password);
        assert.equal(password,true)
    })
})
