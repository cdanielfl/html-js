//crie uma função que calcule a soma de 3 numeros, exib no console o resultado e a média

function somarTresNumeros(n1, n2, n3) {
    let resultado = n1 + n2 + n3;
    console.log("Resultado da soma: " + resultado);
    let media = resultado / 3;
    console.log("Média: " + media);
}
somarTresNumeros(8, 10, 12); 

//Crie duas funções que calcule a soma er a média de 3 números, exiba no console o resultado e a média
function somarNumeros(n1, n2, n3) {
    let adição = n1 + n2 + n3;
    console.log("Resultado da soma: " + adição);
    return adição;
}   
function calcularMedia(adição) {
    let media = adição / 3;
    console.log("Média: " + media);
}
calcularMedia(somarNumeros(8, 10, 12)); 