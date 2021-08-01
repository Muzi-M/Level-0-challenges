function maxNumber(firstInt, secondInt, thirdInt){
    if (firstInt - secondInt > 0 && firstInt - thirdInt > 0){
        return firstInt;
    }else if (secondInt - firstInt > 0 && secondInt - thirdInt > 0){
        return secondInt;
    } else {
        return thirdInt;
    }
    
}

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
