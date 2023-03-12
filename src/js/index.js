//pegar o elemento HTML dos botoes 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        
        desativarBotaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();
        mostrarImagemAtiva(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}
