function verificarIdade(idade) {
if (typeof idade !== 'string'){
        const mensagem = `Idade: ${idade} anos`;
    console.log(mensagem);
    

    if (idade >= 60) {
        console.log(`Véi`);
    } else if (idade >= 12 && idade <= 18) {
        console.log(`Aborrexente`);
    } else if (idade < 12) {
        console.log(`Criança`);
    } else {
        console.log(`Adulto`);
     }
 }   else {
    console.log(`Idade inválida`);
    }
}

verificarIdade('dbdoubf')
verificarIdade(10);