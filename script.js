document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { q: "Que signifie le C de MJC ?", answer: ["culture","Culture"] },
        { q: "Nom du groupe du concert du 10 avril 2026 ?", answer: ["smooth motion","Smooth Motion"] },
        { q: "Principale mission du SIJ ?", answer: ["informer","Informer"] },
        { q: "Tarif d’adhésion à la MJC pour les jeunes de moins de 25 ans ?", answer: ["10euros","10 euros","10 €","10euro","10 euro","10e"] },
        { q: "Comment se nomme l'espace de musiques actuelles de la MJC ?", answer: ["trockson","Trockson"] },
        { q: "En Trois lettres, un dispositif du territoire s’articulant entre le BAFA et du bénévolat ?", answer: ["pec","PEC"] },
        { q: "Nom de la bourse permettant une aide financière pour le permis pour les jeunes habitant Morlaix communauté ?", answer: ["pass’engagement","Pass’engagement","pass engagement","Pass engagement"] },
        { q: "Nombre d’activités proposées à la MJC ?", answer: ["dix-huit","Dix-huit","18"] },
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
    const finalMsgEl = document.getElementById('finalMsg'); // nouvelle variable

    function showQuestion() {
        questionEl.textContent = questions[current].q;
        answerInput.value = '';
        answerInput.focus();
    }

    function showResult() {
        quizSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        scoreEl.textContent = `Score : ${score} / ${questions.length}`;
    
        // On masque tous les messages
        document.getElementById('msg-0-4').classList.add('hidden');
        document.getElementById('msg-5-8').classList.add('hidden');
    
        // Conditions regroupées
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
        // Correction de la validation pour tableau de réponses
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
