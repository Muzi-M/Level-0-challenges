function areaOfATriangle(sideA, sideB, sideC){
    let semiPerimeter = 0.5 * (sideA + sideB + sideC);
    let root = semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC);
    let area = Math.sqrt(root);
    return area; 
}
areaOfATriangle(3, 5, 6);
