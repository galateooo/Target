function fibonacci(numero){
    let anterior = 0;
    let atual = 1;
    let laco = 0;
    console.log(0)

    while(atual <= numero) {
        if (numero ===atual){
            return true;
        }
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        laco ++;
        console.log(proximo);
    }
    
    return false;
}

const escolhaUmNumero = 25;

if (fibonacci(escolhaUmNumero)){
    console.log(`O número ${escolhaUmNumero} faz parte da sequência de Fibonacci.`);
} else {
    console.log(`O número ${escolhaUmNumero} não faz parte da sequência de Fibonacci.`);
}

