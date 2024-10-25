const codeOutput = document.querySelector('.code-output');
const codeLines = [
    'console.log("¡Hola, mundo!");',
    'function sumar(a, b) {',
    '    return a + b;',
    '}',
    'let resultado = sumar(5, 3);',
    'console.log("Resultado: " + resultado);'
];

let lineIndex = 0;

function typeLine(line) {
    let charIndex = 0;

    function typeCharacter() {
        if (charIndex < line.length) {
            codeOutput.textContent += line.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, 50);
        } else {
            codeOutput.textContent += '\n';
            lineIndex++;
            if (lineIndex < codeLines.length) {
                setTimeout(() => typeLine(codeLines[lineIndex]), 300);
            } else {
                setTimeout(() => restartTyping(), 1000);
            }
        }
    }

    typeCharacter();
}

function restartTyping() {
    codeOutput.textContent = '';
    lineIndex = 0;
    typeLine(codeLines[lineIndex]);
}

const runButton = document.querySelector('.run-challenge');
const codeInput = document.querySelector('.code-input');
const challengeOutput = document.querySelector('.challenge-output');
const modal = document.getElementById('codeChallenge');
const startButton = document.querySelector('.start-button');
const closeButton = document.querySelector('.close-modal');

startButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

runButton.addEventListener('click', () => {
    const userCode = codeInput.value;
    try {
        const func = new Function(userCode);
        const result = func();
        challengeOutput.textContent = result === 8 ? '¡Correcto!' : 'Inténtalo de nuevo.';
    } catch (error) {
        challengeOutput.textContent = 'Error: ' + error.message;
    }
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

const tips = [
    "Usa `const` para variables que no cambiarán su valor.",
    "Evita usar `var` en JavaScript, prefiere `let` y `const`.",
    "Divide tu código en funciones pequeñas para mejorar la legibilidad.",
    "Recuerda usar comentarios para explicar tu código."
];

const todayTip = tips[new Date().getDate() % tips.length];
const tipElement = document.createElement('p');
tipElement.textContent = "Tip del día: " + todayTip;
tipElement.style.color = '#ffcc00';
document.querySelector('.text-section').appendChild(tipElement);

window.onload = () => {
    document.querySelector('.container').classList.add('visible');
    typeLine(codeLines[lineIndex]);
};
