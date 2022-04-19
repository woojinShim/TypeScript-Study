{
    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNull(123);
    console.log(result);
    
}