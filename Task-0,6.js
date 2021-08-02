function maxNumber(){
    let largestInteger = -Infinity
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > largestInteger){
            largestInteger = arguments[i]
        }
    }
    return largestInteger
}
maxNumber(4, 7, 6, 9, 4, 1);
