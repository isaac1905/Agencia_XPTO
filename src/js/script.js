// Carrega os objetos do documento HTML
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


function Trocar() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setInterval(() => {
    if (imagemAtual === imagensPainel.length - 1) {
        imagemAtual = 0;
    } else {
        imagemAtual++;
    }
    Trocar();
}, 5000)


// Evento de click para avançar a imagem do botão avançar
setaAvancar.addEventListener('click', () => {
    if (imagemAtual === imagensPainel.length - 1) {
        imagemAtual = 0;
    } else {
        imagemAtual++;
    }
    Trocar();
})

// Evento de click paraavançar a imagem do botão voltar
setaVoltar.addEventListener('click', function() {
    if (imagemAtual == 0) {
        imagemAtual = imagensPainel.length - 1
    } else {
        imagemAtual--
    }
    Trocar();
})