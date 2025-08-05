function medias(notas = []){
    let soma = 0;

    for(i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    const media = (soma / notas.length);
    console.log(`A média é: ${media}`);
}

medias([10,10,10,10,10,10,10,10,10]);