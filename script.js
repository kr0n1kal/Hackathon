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
            setTimeout(typeCharacter, 50); // Velocidad de escritura
        } else {
            codeOutput.textContent += '\n'; // Añade un salto de línea al final
            lineIndex++;
            if (lineIndex < codeLines.length) {
                setTimeout(() => typeLine(codeLines[lineIndex]), 300); // Espera antes de escribir la siguiente línea
            } else {
                // Reiniciar el proceso
                setTimeout(() => restartTyping(), 1000); // Espera 1 segundo antes de reiniciar
            }
        }
    }

    typeCharacter();
}

function restartTyping() {
    codeOutput.textContent = ''; // Limpia el contenido del monitor
    lineIndex = 0; // Reinicia el índice de líneas
    typeLine(codeLines[lineIndex]); // Comienza a escribir la primera línea
}

window.onload = () => {
    typeLine(codeLines[lineIndex]); // Comienza a escribir la primera línea
};