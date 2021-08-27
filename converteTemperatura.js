module.exports = class ConverteTemperatura {
    
    celsiusParaKelvin(temperatura) {
        return parseFloat((temperatura + 273.15)).toFixed(2);  
    }

    celsiusParaFahrenheit(temperatura) {
        return parseFloat(((temperatura * 1.8) + 32)).toFixed(2);  
    }

    kelvinParaCelsius(temperatura) {
        return parseFloat((temperatura - 273.15)).toFixed(2);   
    }

    kelvinParaFahrenheit(temperatura) {
        return this.celsiusParaFahrenheit(
            parseFloat(this.kelvinParaCelsius(temperatura))
        );
    }

    fahrenheitParaCelsius(temperatura) {
        return parseFloat(((temperatura - 32) / 1.8)).toFixed(2);
    }

    fahrenheitParaKelvin(temperatura) {
        return this.celsiusParaKelvin(
            parseFloat(this.fahrenheitParaCelsius(temperatura))
        );
    }

}
