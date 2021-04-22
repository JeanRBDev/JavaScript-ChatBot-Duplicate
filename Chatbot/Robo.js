window.onload = function getClientName() {
    var nomeCliente = window.prompt("Por favor, antes de usar o nosso ChatBot, insira o seu nome:", "Anônimo");
    
    document.getElementById("cliente_nome").innerHTML = nomeCliente;
}

var Cliente = {
    Nome: "",
    RealizarPergunta: function () {
        const pergunta = (document.getElementById('textarea_pergunta').value);
        //alert(`Pergunta enviada com sucesso.\n Sua pergunta: ${pergunta}`);
        BancoDeDados.ConsultarPergunta(pergunta);
        Robo.ResponderPergunta();
    }
};

/*var Robo = {
    ResponderPergunta: function () {
        //divResposta.innerText = "Jean Rodrigues";

        //var dataHoje = new Date();
        //console.log(dataHoje);
        //alert(dataHoje);
        //alert("Pergunta respondida");
    }
};*/

var BancoDeDados = {

    // Criei várias arrays para ter um dicionário de várias perguntas, separando em perguntas relacioandas a data, tempo, etc.

    PerguntasData: [
        { Pergunta: "Qual o dia de hoje?", Resposta: new Date().toLocaleDateString() },
        { Pergunta: "Qual dia de hoje?", Resposta: new Date().toLocaleDateString() },
        { Pergunta: "Qual dia é hoje?", Resposta: new Date().toLocaleDateString() },
        { Pergunta: "dia de hoje?", Resposta: new Date().toLocaleDateString() }
    ],

    PerguntasTempo: [
        { Pergunta: "Qual o clima?", Resposta: "teste" },
    ],

    ConsultarPergunta: function (pergunta) {

        // Criei o objeto Retornos para ficar mais fácil de relacionar e filtrar as perguntas a partir do Banco de Dados

        var Retornos = {
            RetornoData: BancoDeDados.PerguntasData.filter(p => p.Pergunta == pergunta),
            RetornoTempo: BancoDeDados.PerguntasTempo.filter(p => p.Pergunta == pergunta),
        }

        var dataHoje = new Date();
        var divResposta = document.getElementById("resposta_enviada");
        
        //const perguntaRetornoData = BancoDeDados.PerguntasData.filter(p => p.Pergunta == pergunta);

        /*if (Retornos.RetornoData.length == 0) {
            alert("Desculpe, não tenho a resposta para esta pergunta");
        } else {
            alert(Retornos.RetornoData[0].Resposta);
            divResposta.innerText = dataHoje.toLocaleDateString();
        }

        if (Retornos.RetornoTempo.length == 0) {
            alert("Desculpe, não tenho a resposta para esta pergunta");
        } else {
            alert(Retornos.RetornoTempo[0].Resposta);
            divResposta.innerText = Retornos.RetornoTempo[0].Resposta
        */
        
        if (Retornos.RetornoData.length > 0) {
            alert(Retornos.RetornoData[0].Resposta);
            divResposta.innerText = dataHoje.toLocaleDateString();
        }

        if (Retornos.RetornoTempo.length > 0) {
            alert(Retornos.RetornoTempo[0].Resposta);
            divResposta.innerText = Retornos.RetornoTempo[0].Resposta
        }
    }
}

function checkAdult(perguntas, pergunta) {
    return age >= 18;
}

var Util = {
    EscreverNomeDiv: function () { }
}

