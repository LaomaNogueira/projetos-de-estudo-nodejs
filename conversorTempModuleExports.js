const rLine = require("readline-sync");

//module exports:
const ChamandoConverteTemp = require('./converteTemperatura');

//converte a temperatura, de acordo com a escala de origem e a desejada: 

const comparaTemperatura = (temperatura, escalaOrigem, escalaDesejada) => {
    const converteTemp = new ChamandoConverteTemp();

    switch(escalaOrigem) {
        case 'celsius':
            if(escalaDesejada === "kelvin") {
                return converteTemp.celsiusParaKelvin(temperatura);
            }
            return converteTemp.celsiusParaFahrenheit(temperatura);
            
        case 'kelvin':
            if(escalaDesejada === "celsius") {
                return converteTemp.kelvinParaCelsius(temperatura);
            }
            return converteTemp.kelvinParaFahrenheit(temperatura);

        case 'fahrenheit':
            if(escalaDesejada === "celsius") {
                return converteTemp.fahrenheitParaCelsius(temperatura);
            }
            return converteTemp.fahrenheitParaKelvin(temperatura);
            
    }
}

console.log(comparaTemperatura(
    rLine.questionFloat(`Temperatura: `), 
    rLine.question(`Converter de: `), 
    rLine.question(`Para: `)
))