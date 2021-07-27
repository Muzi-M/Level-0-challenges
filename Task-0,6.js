function maxNumber(a, b, c){
    if (a - b > 0 && a - c > 0){
        return a;
    }else if (b - a > 0 && b - c > 0){
        return b;
    } else {
        return c;
    }
    
}
maxNumber(4, 7, 6);
