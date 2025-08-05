function pesoIdeal(peso, altura){
    let imc = peso / Math.pow(altura, 2);
    console.log(`Seu imc é ${imc.toFixed(2)}`);

    if(imc < 18.5){
        console.log('Você está abaixo do peso');
    }else if(imc < 24.9){
        console.log('Você está com pesso normal');
    }else if(imc < 29.9){
        console.log('Você está com sobrepeso');
    }else{
        console.log('Obesidade');
    }
}

pesoIdeal(100, 1.73);
pesoIdeal(64, 1.58);
pesoIdeal(75, 1.85);
pesoIdeal(50, 1.70);