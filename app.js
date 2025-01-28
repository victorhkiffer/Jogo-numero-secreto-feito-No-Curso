let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag , texto);
    campo.innerHTML = texto;
}


function textoInicial() {
  exibirTextoNaTela('h1' , 'jogo de adivinhação de número');  exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');  
}

textoInicial();


function verificarChute() {
    
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        
        exibirTextoNaTela('h1', 'Na Mosca!!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Boa mestre, você descobriu o número com ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoNaTela('p', mensagemTentativas);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    
    }else{
        if(chute > numeroSecreto ){
            exibirTextoNaTela('p', 'O número é menor.');
        }else{
            exibirTextoNaTela('p', 'O número é maior.');
        }
        tentativas++
        limparCampo();
    }

}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; //nosso contador
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true)
}