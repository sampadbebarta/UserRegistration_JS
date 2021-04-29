module.exports=
{
    patternMatching(inputPattern,validPattern) 
    {
        if(validPattern.test(inputPattern))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
