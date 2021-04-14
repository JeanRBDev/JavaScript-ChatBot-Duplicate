var Cliente = {

    Nome: "André Lucas",
    RealizarPergunta: function () {
        const pergunta = (document.getElementById('textarea_pergunta').value);
        alert(`Pergunta enviada com sucesso.\n Sua pergunta: ${pergunta}`);
    }
};

var Robo = {
    ResponderPergunta: function () {
        var divResposta = document.getElementById("resposta_enviada");
        //divResposta.innerText = "Jean Rodrigues";
        divResposta.innerText = document.getElementById("textarea_resposta").value;
        alert("Resposta enviada com sucesso!");
    }
};

var Util = {
    EscreverNomeDiv: function () { }
}