module.exports=
{
    patternMatching(inputPattern,validPattern) 
    {
        if(validPattern.test(inputPattern))
        {
            console.log("Valid");
            return true;
        }
        else
        {
            console.log("Invalid");
            return false;
        }
    }
}