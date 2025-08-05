function converter(escala, temperatura){
    switch(escala){
        case 'Celsius':
            console.log('Convertendo para Farenheit ficam: ' + ((temperatura *  9/5) + 32) + "°F");
            break;
        case 'Farenheit':
            console.log('Convertendo para Celsius ficam: ' + ((temperatura - 32) * 5/9).toFixed(2) + "°C");
            break;
        default:
            console.log('Converto apenas celsius e farenheit');
            break;
    }
}

converter('Celsius', 30);
converter('Farenheit', 52);