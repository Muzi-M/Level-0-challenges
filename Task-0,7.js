function celsiusToFahrenheits(temperature){
    let fahrenheits = (temperature * 9/5) + 32;
    return fahrenheits + '°F';
}
function fahrenheitsToCelsius(temperature){
    let celsius = (temperature - 32) * 5/9;
    return celsius + '°C';
}
fahrenheitsToCelsius(95);
