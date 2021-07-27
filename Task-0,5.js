function areaOfATriangle(a, b, c){
    let semiPerimeter = 0.5 * (a + b + c);
    let root = semiPer*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c)
    let area = Math.sqrt(root);
    return area; 
}
areaOfATriangle(3, 5, 6)
