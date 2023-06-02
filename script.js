function main() {

    let codigoVoto,
        votoCandidato1 = 0,
        votoCandidato2 = 0,
        votoCandidato3 = 0,
        votoEmBranco = 0,
        votoNulo = 0,
        totalVotos = 0,
        senha,
        primeiroCandidato,
        segundoCandidato,
        terceiroCandidato,
        confirmaInicio,
        confirmacaoFinal;
        
    // do while responsável por iniciar a votação    
    do {
        senha = parseInt(prompt("Crie uma senha: "));
        primeiroCandidato = prompt("Digite o nome do primeiro candidato: ");
        segundoCandidato = prompt("Digite o nome do segundo candidato: ");
        terceiroCandidato = prompt("Digite o nome do terceiro candidato: ");
        confirmaInicio = prompt("Deseja iniciar a votação? (S) (N)")

    }  while (confirmaInicio !== "S" && confirmaInicio !== "s");

    // do while responsável por contar os votos
    do {
        console.log("| 1 |", primeiroCandidato, "\n| 2 |", segundoCandidato, "\n| 3 |", terceiroCandidato, "\n| 5 | Voto em branco \n| 8 | Voto nulo \n\nDigite a sua senha para encerrar a votação!");
        codigoVoto = setTimeout(prompt("Digite o número do seu candidato: "), 500);
        
        if (codigoVoto !== null) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            break;
        }

        switch (codigoVoto) {
            case 1:
                console.clear();
                votoCandidato1++;
                totalVotos++;
                setTimeout(audioConfirmacao(), 500);
                break;
            case 2:
                console.clear();
                votoCandidato2++;
                totalVotos++;
                setTimeout(audioConfirmacao(), 500);
                break;
            case 3:
                console.clear();
                votoCandidato3++;
                totalVotos++;
                setTimeout(audioConfirmacao(), 500);
                break;
            case 5:
                console.clear();
                votoEmBranco++;
                totalVotos++;
                setTimeout(audioConfirmacao(), 500);
                break;
            case 8:
                console.clear();
                votoNulo++;
                totalVotos++;
                setTimeout(audioConfirmacao(), 500);
                break;  
            case senha:
                confirmacaoFinal = prompt(">> Deseja realmente encerrar a votação <<");
                break;
            default:
                console.clear();
                console.log("Número inválido");
        }

    } while (confirmacaoFinal !== "S" && confirmacaoFinal !== "s");    

    console.clear();
    percentual();
    candidatoVencedor();

    // Função que define o vencedor
    function candidatoVencedor() {
        if (votoCandidato1 > votoCandidato2 && votoCandidato1 > votoCandidato3) {
            console.log("O candidato", primeiroCandidato, "é o vencedor!");
        } else if (votoCandidato2 > votoCandidato1 && votoCandidato2 > votoCandidato3) {
            console.log("O candidato", segundoCandidato, "é o vencedor!");
        } else if (votoCandidato3 > votoCandidato1 && votoCandidato3 > votoCandidato2) {
            console.log("O candidato", terceiroCandidato, "é o vencedor!");
        } else {
            console.log("Empate!");
        }
    }

    // função que calcula o percentual de cada candidato
    function percentual() {
        console.log(">> VOTAÇÃO ENCERRADA <<");
        console.log("Votos do candidato ", primeiroCandidato, " = ", votoCandidato1, Math.round((votoCandidato1 / totalVotos) * 100), "%");
        console.log("Votos do candidato ", segundoCandidato, " = ", votoCandidato2, Math.round((votoCandidato1 / totalVotos) * 100), "%");
        console.log("Votos do candidato ", terceiroCandidato, " = ", votoCandidato3, Math.round((votoCandidato3 / totalVotos) * 100), "%");
        console.log("Votos em BRANCO", " = ", votoEmBranco);
        console.log("Votos NULO", " = ", votoNulo);
        console.log("Total de votos", " = ", totalVotos, "\n");   
    }

    // função para adicionar audio a cada voto
    function audioConfirmacao() {
        let audio = new Audio("confirma-urna.mp3");

        audio.play();
    }
}