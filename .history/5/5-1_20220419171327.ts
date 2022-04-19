{
    function checkNotNull(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNull(123);
    console.log(result);
    checkNotNull(null);
}