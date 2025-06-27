// main.js

// Array de fatos para tornar mais dinâmico (opcional, mas bom para expansão futura)
const facts = [
    "Apolo adora caçar bolinhas e consegue pegá-las no ar!",
    "Ele é um mestre em derrubar brinquedos e depois pedir para brincar de novo.",
    "Apolo tem um olhar expressivo que derrete qualquer coração.",
    "Seu passatempo favorito é tirar cochilos longos e sonhar com biscoitos.",
    "Apolo é muito inteligente e aprendeu vários truques!",
    "Ele adora passear no parque e fazer novos amigos peludos.",
    "Sua cauda balança tanto que parece um helicóptero quando ele está feliz!",
    "Apolo é super carinhoso e adora dar lambeijos na família.", // Novo fato
    "Ele tem um sono profundo e sonha alto, às vezes com latidos fofos!", // Novo fato
    "Adora ir passear de carro e colocar a cabeça para fora da janela (com segurança, claro!).", // Novo fato
    "Apolo é muito protetor e sempre avisa quando alguém chega na porta.", // Novo fato
    "Seu brinquedo favorito é uma corda velha que ele não larga por nada.", // Novo fato
    "Ele tem um senso de humor único e faz caretas engraçadas.", // Novo fato
    "Apolo é um ótimo ouvinte e sempre parece entender o que você está dizendo.", // Novo fato
    "Ele ama um bom banho de sol no quintal.", // Novo fato
    "Sua energia é contagiante e ele sempre te convida para brincar!" // Novo fato
];
let currentFactIndex = 0;

// Adiciona um 'event listener' ao botão quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const factButton = document.getElementById('factButton');
    const apoloFactsDiv = document.getElementById('apoloFacts');

    if (factButton && apoloFactsDiv) {
        factButton.addEventListener('click', function() {
            // Alterna a visibilidade da div de fatos
            if (apoloFactsDiv.classList.contains('hidden')) {
                apoloFactsDiv.classList.remove('hidden');
                factButton.textContent = 'Esconder curiosidades';
            } else {
                apoloFactsDiv.classList.add('hidden');
                factButton.textContent = 'Clique para saber mais sobre Apolo!';
            }

            // Opcional: Percorrer os fatos se quiser mostrar um de cada vez dinamicamente
            // Por enquanto, ele mostra tudo de uma vez após o primeiro clique, conforme a estrutura HTML.
            // Se quiser mostrar um fato e alterá-lo a cada clique, descomente o bloco abaixo:
            /*
            const apoloFactsParagraphs = document.querySelectorAll('#apoloFacts p');
            if (apoloFactsParagraphs.length > 0) {
                apoloFactsParagraphs[0].innerHTML = `<strong>Curiosidade:</strong> ${facts[currentFactIndex]}`;
                currentFactIndex = (currentFactIndex + 1) % facts.length;
            } else {
                 // Carga inicial se mostrar apenas um fato
                apoloFactsDiv.innerHTML = `<p><strong>Curiosidade:</strong> ${facts[currentFactIndex]}</p>`;
                currentFactIndex = (currentFactIndex + 1) % facts.length;
                apoloFactsDiv.classList.remove('hidden');
            }
            */
        });
    } else {
        console.error("Erro: Botão ou div de fatos não encontrados. Verifique os IDs no HTML.");
    }
});
