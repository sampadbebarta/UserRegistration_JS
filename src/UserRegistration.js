let myPromise = new Promise(function(myResolve, myReject) {
module.exports=
{
    patternMatching(inputPattern,validPattern) 
    {
        if(validPattern.test(inputPattern))
        {
            myResolve("Valid");
            return true;
        }
        else
        {
            myReject("Invalid");
            return false;
        }
    }
}
})

myPromise.then(
    function(value) {patternMatching(value);},
    function(error) {patternMatching(error);}
);