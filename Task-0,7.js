function celsiusToFahrenheit(celsiusInput){
     fahrenheit = (celsiusInput * 9/5) + 32
}
function fahrenheitToCelsius(_fahrenheitInput){
        celsius = (_fahrenheitInput - 32) / (9/5)
    return `${fahrenheit}°F. ${celsius}°C`;
}

celsiusToFahrenheit(43.33)
fahrenheitToCelsius(120)




