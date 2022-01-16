// Carrega os objetos do documento HTML
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

//Funçao para trocar a imagem
function Trocar() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
}


// Funçao avançar o índice de imagemAtual e chamar a funçao de troca da imagem
function avancar() {
    if (imagemAtual === imagensPainel.length - 1) {
        imagemAtual = 0;
    } else {
        imagemAtual++;
    }
    Trocar();
}


// Funçao para voltar a imagem
function voltar() {
    if (imagemAtual == 0) {
        imagemAtual = imagensPainel.length - 1
    } else {
        imagemAtual--
    }
    Trocar();
}


// Avança a imagem a cada 5 segundos
setInterval(avancar, 5000)

// Evento de click para avançar a imagem do botão avançar
setaAvancar.addEventListener('click', avancar)

// Evento de click paraavançar a imagem do botão voltar
setaVoltar.addEventListener('click', voltar)
