// script.js
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.webp",
    "images/4.jpg",
    "images/5.webp",
    "images/6.jpg",
    "images/7.webp",
    "images/8.webp",
    "images/9.webp",
    "images/10.webp"
];

let currentPair = [0, 1];
let champion = null;

function updateOptions() {
    if (currentPair[1] >= images.length) {
        // Esconde o jogo e exibe apenas o vencedor
        document.getElementById('game').style.display = "none"; // Oculta o contêiner do jogo
        document.getElementById('winner').style.display = "block"; // Mostra o vencedor
        document.getElementById('winnerImage').src = images[champion]; // Define a imagem do campeão
        return;
    }

    // Atualiza as imagens das opções
    document.getElementById('image1').src = images[currentPair[0]];
    document.getElementById('image2').src = images[currentPair[1]];
}

function selectOption(option) {
    // Define o vencedor atual
    champion = option === 1 ? currentPair[0] : currentPair[1];

    // Atualiza o próximo par
    currentPair = [champion, currentPair[1] + 1];

    // Atualiza a tela
    updateOptions();
}

// Inicializa o jogo
updateOptions();
