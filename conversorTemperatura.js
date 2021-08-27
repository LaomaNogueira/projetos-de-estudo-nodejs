const rLine = require("readline-sync");


//converte a temperatura, de acordo com a escala de origem e a desejada: 
function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    let apoio;
    if (escalaOrigem === "celsius") {
        if(escalaDesejada === "kelvin") {
            return temperatura + 273.15;
        } else {
            return (temperatura * 1.8) + 32;
        }

    } else if (escalaOrigem === "kelvin") {
        apoio = temperatura - 273.15;
        if(escalaDesejada === "celsius") {
            return apoio;
        } else {
            return (apoio * 1.8) + 32;
        }
    } else {
        apoio = (temperatura - 32) / 1.8;
        if(escalaDesejada === "celsius") {
            return apoio;
        } else {
            return apoio + 273.15;;
        }
    }
}

console.log(converteTemperatura(2.3, 'celsius', 'fahrenheit'));
