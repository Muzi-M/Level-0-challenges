function maxNumber(firstInt, secondInt, thirdInt){
    if (firstInt - secondInt > 0 && firstInt - thirdInt > 0){
        return firstInt;
    }else if (secondInt - firstInt > 0 && secondInt - thirdInt > 0){
        return secondInt;
    } else {
        return thirdInt;
    }
    
}
maxNumber(4, 7, 6);
