const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const story = {
    start: {
        text: "Você acorda em um castelo misterioso. Há duas portas à sua frente.",
        choices: [
            { text: "Porta da esquerda", next: 'leftDoor' },
            { text: "Porta da direita", next: 'rightDoor' }
        ]
    },
    leftDoor: {
        text: "Você encontra um dragão que te faz uma charada: 'O que é cheio de buracos, mas ainda assim segura água?'",
        choices: [
            { text: "Uma esponja", next: 'correctRiddle' },
            { text: "Um balde", next: 'wrongRiddle' }
        ]
    },
    rightDoor: {
        text: "Você encontra um labirinto. Você pode tentar atravessá-lo ou voltar.",
        choices: [
            { text: "Atravessar o labirinto", next: 'maze' },
            { text: "Voltar", next: 'start' }
        ]
    },
    correctRiddle: {
        text: "Você acertou a charada! O dragão te dá um tesouro. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    wrongRiddle: {
        text: "Você errou a charada e o dragão te expulsa. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    maze: {
        text: "Você se perde no labirinto e encontra uma saída secreta para um jardim encantado. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    }
};

function startStory(node) {
    storyElement.innerText = story[node].text;
    choicesElement.innerHTML = '';
    story[node].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => startStory(choice.next);
        choicesElement.appendChild(button);
    });
}

startStory('start');
