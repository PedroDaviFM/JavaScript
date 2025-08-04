function pares(num = []){
    pares = 0;
    impares = 0;
    for(i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            console.log(`o número ${num[i]}, é par`);
            pares++;
        }else{
            console.log(`O número ${num[i]}, é impar`);
            impares++;
        }
    }   
}

pares([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(`Pares:${pares}\nImpares: ${impares}`);