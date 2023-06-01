function main() {

    let codigoVoto,
        votoCandidato1 = 0,
        votoCandidato2 = 0,
        votoCandidato3 = 0,
        votoEmBranco = 0,
        votoNulo = 0,
        totalVotos = 0,
        senha = parseInt(prompt("Crie uma senha: ")),
        primeiroCandidato = prompt("Digite o nome do primeiro candidato: "),
        segundoCandidato = prompt("Digite o nome do segundo candidato: "),
        terceiroCandidato = prompt("Digite o nome do terceiro candidato: "),
        confirmacaoFinal;
        
        
    do {
        console.log("| 1 |", primeiroCandidato, "\n| 2 |", segundoCandidato, "\n| 3 |", terceiroCandidato, "\n| 5 | Voto em branco \n| 8 | Voto nulo \n| 0 | Encerrar a votação\n");
        codigoVoto = prompt("Digite o número do seu candidato: ");
        
        if (codigoVoto !== null) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            break;
        }

        switch (codigoVoto) {
            case 1:
                votoCandidato1++;
                totalVotos++;
                break;
            case 2:
                votoCandidato2++;
                totalVotos++;
                break;
            case 3:
                votoCandidato3++;
                totalVotos++;
                break;
            case 8:
                votoEmBranco++;
                totalVotos++;
                break;
            case 0:
                votoNulo++;
                totalVotos++;
                break;  
            case senha:
                confirmacaoFinal = prompt(">> Deseja realmente encerrar a votação <<");
                break;
        }

    } while (confirmacaoFinal !== "S" && confirmacaoFinal !== "s");    

    console.clear();
    percentual();
    candidatoVencedor();

    function candidatoVencedor() {
        if (votoCandidato1 > votoCandidato2 && votoCandidato1 > votoCandidato3) {
            console.log("O candidato é o vencedor!");
        } else if (votoCandidato2 > votoCandidato1 && votoCandidato2 > votoCandidato3) {
            console.log("O candidato 2 é o vencedor!");
        } else {
            console.log("O candidato 3 é o vencedor!");
        }
    }

    function percentual() {
        console.log(">> VOTAÇÃO ENCERRADA <<");
        console.log("Votos do candidato ", primeiroCandidato, " = ", votoCandidato1, Math.round((votoCandidato1 / totalVotos) * 100), "%");
        console.log("Votos do candidato ", segundoCandidato, " = ", votoCandidato2, Math.round((votoCandidato1 / totalVotos) * 100), "%");
        console.log("Votos do candidato ", terceiroCandidato, " = ", votoCandidato3, Math.round((votoCandidato3 / totalVotos) * 100), "%");
        console.log("Votos em BRANCO", " = ", votoEmBranco);
        console.log("Votos NULO", " = ", votoNulo);
        console.log("Total de votos", " = ", totalVotos);   
    }
}