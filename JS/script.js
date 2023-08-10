const questions = [
    { question: "¿Cuál es la capital de Guatemala?", answers: ["guatemala, ciudad de guatemala"] },
    { question: "¿Cúales son los colores primarios", answers: ["amarillo", "azul", "rojo"] },
    { question: "¿Cúales son los simbolos patrios de Guatemala?", answers: ["bandera", "quetzal", "escudo"]},
    { question: "¿Qué nombres hay con la letra J", answers: ["juan", "julio", "jose"] },
    { question: "¿Cuál es la fecha de independencia en Guatemala?", answers: ["15 de septiembre"] },
];

let timer;
let timeLeft = 30;

const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitButton");
const retryButton = document.getElementById("retryButton");

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    submitButton.disabled = false;
    countdown();
});

submitButton.addEventListener("click", () => {
    checkAnswers();
});

retryButton.addEventListener("click", () => {
    location.reload();
});

function countdown() {
    const timerElement = document.getElementById("timer");

    if (timeLeft > 0) {
        document.body.style.backgroundColor = "#001f3f";
        document.body.style.transition = "background-color 1s ease";
        timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        setTimeout(countdown, 1000);
        timeLeft--;
    } else {
        document.body.style.backgroundColor = "#3b3b3b";
        timerElement.textContent = "Tiempo agotado";
        alert("¡Tiempo agotado!");
        showRetryButton();
    }
}

function checkAnswers() {
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = document.getElementById(`answer${i + 1}`).value.trim().toLowerCase();
        const correctAnswers = questions[i].answers.map(answer => answer.toLowerCase());

        if (correctAnswers.includes(userAnswer)) {
            correctCount++;
        }
    }

    alert(`Respuestas correctas: ${correctCount}/${questions.length}`);
    showRetryButton();
}

function showRetryButton() {
    submitButton.disabled = true;
    retryButton.style.display = "block";
    document.body.style.backgroundColor = "#16453d"; 
}