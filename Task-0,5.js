function areaOfATriangle(a, b, c){
    var semiPer = 0.5 * (a + b + c);
    var root = semiPer*(semiPer-a)*(semiPer-b)*(semiPer-c)
    var area = Math.sqrt(root);
    return area; 
}
areaOfATriangle(3, 6, 7)
