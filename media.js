function media(n1, n2, n3){
    let valor = (n1 + n2 + n3) / 3;
    if(valor >= 6){
        console.log(`nota: ${valor}, aluno aprovado.`);
    }else{
        console.log(`nota: ${valor}, aluno reprovado`);
    }

}

media(5, 7, 9);