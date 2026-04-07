document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { q: "Que signifie le C de MJC ?", answer: ["culture","Culture"] },
        { q: "Nom du groupe du concert du 10 avril 2026 ?", answer: ["smooth motion","Smooth Motion","smoothmotion"] },
        { q: "Principale mission du SIJ ?", answer: ["informer","renseigner","orienter","Informer","Renseigner","Orienter"] },
        { q: "Tarif d'adhésion à la MJC pour les jeunes de moins de 25 ans ?", answer: ["10euros","10 euros","10 €","10euro","10 euro","10e","10","dix","10€"] },
        { q: "Comment se nomme l'espace de musiques actuelles de la MJC ?", answer: ["trockson","Trockson","Trock'son","trock'son","Trock son"] },
        { q: "Depuis quand existe le camion information jeunesse ?", answer: ["2021"] },
        { q: "Nombre d'activités proposées à la MJC ?", answer: ["dix-huit","Dix-huit","18"] },
        { q: "Quelles sont les prénoms des animatrices information jeunesse de la MJC ?", answer: ["Pauline et Audrey","pauline et audrey","pauline","audrey"] },
        { q: "Que veut dire MAO ?", answer: ["musique assistée par ordinateur","Musique assistée par ordinateur"] },
    ];

    let current = 0;
    let score = 0;

    const landing = document.getElementById('landing');
    const quizSection = document.getElementById('quizSection');
    const resultSection = document.getElementById('resultSection');
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const nextBtn = document.getElementById('nextBtn');
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    const scoreEl = document.getElementById('score');
    const launchQuizBtn = document.getElementById('launchQuizBtn');
    const backToLandingBtn = document.getElementById('backToLandingBtn');

    function showQuestion() {
        questionEl.textContent = questions[current].q;
        answerInput.value = '';
        answerInput.focus();
    }

    function showResult() {
        quizSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        scoreEl.textContent = `Score : ${score} / ${questions.length}`;
    
        document.getElementById('msg-0-4').classList.add('hidden');
        document.getElementById('msg-5-8').classList.add('hidden');
    
        if (score >= 0 && score <= 4) {
            document.getElementById('msg-0-4').classList.remove('hidden');
        } else if (score >= 5 && score <= 8) {
            document.getElementById('msg-5-8').classList.remove('hidden');
        }
    }

    function validateAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === '') {
            alert("Veuillez saisir une réponse avant de continuer.");
            answerInput.focus();
            return;
        }
        if (questions[current].answer.map(a => a.toLowerCase()).includes(userAnswer)) score++;
        current++;
        if (current < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    launchQuizBtn.addEventListener('click', () => {
        landing.classList.add('hidden');
        resultSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        current = 0;
        score = 0;
        showQuestion();
    });

    nextBtn.addEventListener('click', validateAnswer);

    answerInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') validateAnswer();
    });

    closeQuizBtn.addEventListener('click', () => {
        quizSection.classList.add('hidden');
        landing.classList.remove('hidden');
        current = 0;
        score = 0;
    });

    backToLandingBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        landing.classList.remove('hidden');
    });
});
