function celsiusToFahrenheits(temp){
    var fahrenheits = (temp * 9/5) + 32;
    return fahrenheits + '°F';
}
function fahrenheitsToCelsius(temp){
    var celsius = (temp - 32) * 5/9;
    return celsius + '°C';
}
fahrenheitsToCelsius(95)