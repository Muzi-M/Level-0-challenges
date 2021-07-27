function celsiusToFahrenheits(temp){
    let fahrenheits = (temp * 9/5) + 32;
    return fahrenheits + '°F';
}
function fahrenheitsToCelsius(temp){
    let celsius = (temp - 32) * 5/9;
    return celsius + '°C';
}
fahrenheitsToCelsius(95)
celsiusToFahrenheits(35)