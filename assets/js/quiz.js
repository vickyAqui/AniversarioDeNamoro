const questions = [
    {
        question: "Qual é a minha cor favorita?",
        options: [
            "Roxo",
            "Lilás",
            "Verde",
            "Verde Musgo"
        ],
        correct: 0
    },
    {
        question: "Qual foi o primeiro presente que te dei?",
        options: [
            "Um livro",
            "Uma carta",
            "Um chocolate",
            "Uma flor"
        ],
        correct: 0
    },
    {
        question: "Qual é minha comida favorita que você faz?",
        options: [
            "Esfiha de Carne",
            "Esfiha de Calabresa",
            "Esfiha de queijo",
            "Todas as Anteriores"
        ],
        correct: 3
    },
    {
        question: "Onde a gente se viu pela primeira vez?",
        options: [
            "No parque",
            "No shopping",
            "Na Etec",
            "No Oswaldo"
        ],
        correct: 3
    },
    {
        question: "Qual é a coisa que eu mais amo em você?",
        options: [
            "Seu Cabelo",
            "Seu Sorriso",
            "Seus Olhos",
            "Tudo em Você ❤️"
        ],
        correct: 3
    },
    {
        question: "Qual é o apelido carinhoso que eu mais uso com você?",
        options: [
            "Meu Amor",
            "Linda",
            "Minha Flor",
            "Sá",
            "Todas as Anteriores"
        ],
        correct: 4
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quizDiv = document.getElementById('quiz');
    const question = questions[currentQuestion];
    
    let html = `
        <h2>${question.question}</h2>
        <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <button class="option-btn" onclick="checkAnswer(${index})">
                ${option}
            </button>
        `;
    });
    
    html += '</div>';
    quizDiv.innerHTML = html;
    
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(answer) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    
    if (answer === questions[currentQuestion].correct) {
        score++;
        buttons[answer].classList.add('correct');
    } else {
        buttons[answer].classList.add('wrong');
        buttons[questions[currentQuestion].correct].classList.add('correct');
    }
    
    if (currentQuestion < questions.length - 1) {
        document.getElementById('next-btn').style.display = 'block';
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizDiv = document.getElementById('quiz');
    const percentage = (score / questions.length) * 100;
    
    quizDiv.innerHTML = `
        <h2>Você é Perfeita! Você me conhece muito Amor ❤️</h2>
        <p>Você acertou ${score} de ${questions.length} perguntas!</p>
        <p>Seu amor por mim está ${percentage}% forte!</p>
    `;
    
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'block';
}

window.onload = showQuestion;
