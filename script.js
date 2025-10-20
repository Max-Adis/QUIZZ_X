// L'URL de votre site
const SITE_URL = 'https://max-adis.github.io/QUIZZ_X/';

// Les données structurées par catégories (10 catégories x 10 questions)
const quizData = {
    electricite_base: {
        title: "1. Électricité de Base",
        icon: "💡",
        questions: [
            { question: "Quelle est l'unité de la tension électrique ?", a: "Ohm", b: "Ampère", c: "Volt", correct: "c" },
            { question: "Quel composant s'oppose au passage du courant ?", a: "Condensateur", b: "Résistance", c: "Bobine", correct: "b" },
            { question: "Quelle est la formule de la Loi d'Ohm ?", a: "P = U * I", b: "U = R * I", c: "E = m * c²", correct: "b" },
            { question: "L'unité de la puissance électrique est le :", a: "Joule", b: "Watt", c: "Farad", correct: "b" },
            { question: "Un circuit en série a :", a: "Une seule boucle pour le courant", b: "Plusieurs chemins pour le courant", c: "Une tension constante", correct: "a" },
            { question: "Quel phénomène est la base de la production d'électricité par alternateur ?", a: "Effet Peltier", b: "Induction électromagnétique", c: "Effet Joule", correct: "b" },
            { question: "Dans un circuit domestique, quel composant assure la sécurité en cas de court-circuit ?", a: "Contacteur", b: "Disjoncteur", c: "Relais", correct: "b" },
            { question: "La fréquence du courant alternatif en Europe est de :", a: "50 Hz", b: "60 Hz", c: "100 Hz", correct: "a" },
            { question: "Quel est le signe de la borne positive d'une batterie ?", a: "N", b: "-", c: "+", correct: "c" },
            { question: "Qu'est-ce qu'un conducteur ?", a: "Un matériau qui bloque les électrons", b: "Un matériau qui permet aux électrons de circuler facilement", c: "Un matériau isolant", correct: "b" }
        ]
    },
    electronique: {
        title: "2. Électronique",
        icon: "🔬",
        questions: [
            { question: "Quel composant amplifie ou commute les signaux électroniques ?", a: "Résistance", b: "Transistor", c: "Diode Zener", correct: "b" },
            { question: "Quel composant convertit un courant alternatif en courant continu ?", a: "Amplificateur opérationnel", b: "Condensateur de filtrage", c: "Pont de diodes (Redresseur)", correct: "c" },
            { question: "Un AOP (Amplificateur Opérationnel) idéal a une impédance d'entrée :", a: "Nulle", b: "Infinie", c: "Faible", correct: "b" },
            { question: "Quel est le rôle principal d'une Diode Zener ?", a: "Émettre de la lumière", b: "Stabiliser la tension", c: "Bloquer le courant alternatif", correct: "b" },
            { question: "Un circuit intégré (IC) est :", a: "Une collection de composants sur une seule puce", b: "Une simple résistance de précision", c: "Un type de bobine", correct: "a" },
            { question: "Quel composant utilise le dopage de semi-conducteurs ?", a: "Potentiomètre", b: "LED", c: "Inductance", correct: "b" },
            { question: "L'unité de mesure de la capacité (d'un condensateur) est le :", a: "Henry (H)", b: "Farad (F)", c: "Siemens (S)", correct: "b" },
            { question: "Dans l'électronique numérique, '1' représente généralement :", a: "L'état 'Bas' (Low)", b: "L'état 'Haut' (High)", c: "Une résistance nulle", correct: "b" },
            { question: "Que signifie le sigle 'CMOS' ?", a: "Complementary Metal-Oxide-Semiconductor", b: "Current Mode Output System", c: "Capacitor Module Operating Software", correct: "a" },
            { question: "Quel type de transistor est le plus souvent utilisé pour la commutation rapide ?", a: "BJT", b: "JFET", c: "MOSFET", correct: "c" }
        ]
    },
    arduino: {
        title: "3. Arduino",
        icon: "🤖",
        questions: [
            { question: "Quel langage de programmation est le plus couramment utilisé avec Arduino ?", a: "Python", b: "C / C++ (Wiring)", c: "Java", correct: "b" },
            { question: "Quel composant est le 'cerveau' de la carte Arduino ?", a: "Le régulateur de tension", b: "Le microcontrôleur ATmega", c: "Le port USB", correct: "b" },
            { question: "Pour lire l'état d'un bouton poussoir, on utilise généralement la fonction :", a: "analogRead()", b: "digitalRead()", c: "pinMode()", correct: "b" },
            { question: "Combien de broches numériques a une carte Arduino UNO ?", a: "6", b: "14", c: "8", correct: "b" },
            { question: "Le 'IDE' Arduino signifie :", a: "Integrated Development Environment", b: "Instruction Digital Editor", c: "Input Data Engine", correct: "a" },
            { question: "Quelle fonction est exécutée une seule fois au démarrage du programme Arduino ?", a: "loop()", b: "start()", c: "setup()", correct: "c" },
            { question: "Qu'est-ce que la modulation de largeur d'impulsion (PWM) permet de simuler ?", a: "La lecture numérique", b: "Une sortie analogique (tension variable)", c: "Une communication série", correct: "b" },
            { question: "Quel est le rôle de la fonction 'delay()' ?", a: "Afficher un message", b: "Mettre le programme en pause", c: "Définir une broche", correct: "b" },
            { question: "Un shield Arduino est :", a: "Une protection physique pour la carte", b: "Une carte d'extension enfichable", c: "Le câble USB de connexion", correct: "b" },
            { question: "Quel type de broche est utilisé pour un capteur de température simple (tout ou rien) ?", a: "Broche analogique", b: "Broche de puissance (GND/5V)", c: "Broche numérique", correct: "c" }
        ]
    },
    html: {
        title: "4. HTML",
        icon: "💻",
        questions: [
            { question: "Que signifie HTML ?", a: "Hyper Text Markup Language", b: "High Technology Modern Language", c: "Hyperlink and Text Management", correct: "a" },
            { question: "Quelle balise est utilisée pour créer un lien hypertexte ?", a: "<h1>", b: "<link>", c: "<a>", correct: "c" },
            { question: "Quelle balise permet de définir une liste non ordonnée ?", a: "<ol>", b: "<ul>", c: "<list>", correct: "b" },
            { question: "Où place-t-on la balise <title> dans un document HTML ?", a: "Dans le <body>", b: "Dans le <head>", c: "À la fin du document", correct: "b" },
            { question: "L'attribut 'src' est souvent utilisé avec quelle balise ?", a: "<p>", b: "<img>", c: "<div>", correct: "b" },
            { question: "Quelle est la signification de l'attribut 'alt' pour une image ?", a: "Alignement de l'image", b: "Texte alternatif (si l'image ne charge pas)", c: "Taille de l'image", correct: "b" },
            { question: "Quelle balise définit le contenu principal et visible de la page ?", a: "<html>", b: "<main>", c: "<head>", correct: "b" },
            { question: "Quel est le sélecteur d'ID en CSS ?", a: ".", b: "#", c: "$", correct: "b" },
            { question: "Quelle balise est utilisée pour un saut de ligne simple ?", a: "<lb>", b: "<br>", c: "<break>", correct: "b" },
            { question: "Quelle version de HTML est la plus récente et courante ?", a: "HTML 4.01", b: "XHTML", c: "HTML5", correct: "c" }
        ]
    },
    architecture_ordinateurs: {
        title: "5. Architecture des Ordinateurs",
        icon: "🖥️",
        questions: [
            { question: "Quel composant est responsable de l'exécution des instructions du programme ?", a: "RAM", b: "CPU", c: "Disque Dur", correct: "b" },
            { question: "Que signifie 'RAM' ?", a: "Read Access Memory", b: "Random Access Memory", c: "Redundant Array of Memory", correct: "b" },
            { question: "L'unité de contrôle (UC) fait partie de quel composant ?", a: "GPU", b: "CPU", c: "CMOS", correct: "b" },
            { question: "Lequel est un exemple de mémoire volatile ?", a: "ROM", b: "RAM", c: "SSD", correct: "b" },
            { question: "Qu'est-ce qu'un 'Bus' dans un ordinateur ?", a: "Un type de logiciel", b: "Un ensemble de fils ou de chemins de communication", c: "Un port USB", correct: "b" },
            { question: "Quelle est l'unité de mesure de la fréquence d'horloge du processeur ?", a: "Byte", b: "Hertz (Hz)", c: "Volt", correct: "b" },
            { question: "L'architecture de von Neumann sépare-t-elle les données et les instructions ?", a: "Oui", b: "Non (elles partagent la même mémoire)", c: "Seulement pour les calculs", correct: "b" },
            { question: "Quel composant est souvent appelé mémoire cache ?", a: "Une petite mémoire rapide intégrée au CPU", b: "La mémoire principale (RAM)", c: "Le disque dur", correct: "a" },
            { question: "Un octet (Byte) est composé de combien de bits ?", a: "4", b: "8", c: "16", correct: "b" },
            { question: "Quelle partie du CPU effectue les opérations arithmétiques et logiques ?", a: "Registre", b: "ALU (Arithmetic Logic Unit)", c: "Cache", correct: "b" }
        ]
    },
    langage_c: {
        title: "6. Langage C",
        icon: "⚙️",
        questions: [
            { question: "Quel est le type de variable utilisé pour stocker un seul caractère ?", a: "int", b: "string", c: "char", correct: "c" },
            { question: "Quelle fonction est utilisée pour l'affichage à l'écran ?", a: "scanf()", b: "print()", c: "printf()", correct: "c" },
            { question: "Quelle est la signification de l'opérateur '==' ?", a: "Affectation (assignation)", b: "Comparaison d'égalité", c: "Incrémentation", correct: "b" },
            { question: "Quelle est la structure de base d'un programme C ?", a: "void setup()", b: "public class Main", c: "int main()", correct: "c" },
            { question: "Quel mot-clé est utilisé pour déclarer une constante ?", a: "final", b: "const", c: "static", correct: "b" },
            { question: "Que signifie le symbole '&' dans scanf() ?", a: "Affectation", b: "Adresse de la variable", c: "Concaténation", correct: "b" },
            { question: "Lequel est un type de boucle en C ?", a: "loop", b: "for", c: "while-do", correct: "b" },
            { question: "Quelle directive est utilisée pour inclure des bibliothèques ?", a: "#import", b: "#include", c: "using", correct: "b" },
            { question: "Quelle est la taille standard (en octets) d'un 'int' sur la plupart des systèmes modernes ?", a: "1", b: "4", c: "8", correct: "b" },
            { question: "Un 'pointeur' en C stocke :", a: "La valeur d'une variable", b: "L'adresse mémoire d'une variable", c: "Le nom d'une variable", correct: "b" }
        ]
    },
    cpp: {
        title: "7. C++",
        icon: "➕",
        questions: [
            { question: "Quel est l'opérateur utilisé pour la sortie de flux (affichage) en C++ ?", a: "printf()", b: "cout <<", c: "print()", correct: "b" },
            { question: "C++ est un langage orienté :", a: "Fonction", b: "Objet", c: "Procédure", correct: "b" },
            { question: "Quel mot-clé est utilisé pour créer une classe ?", a: "struct", b: "class", c: "type", correct: "b" },
            { question: "Qu'est-ce que l'héritage en C++ ?", a: "La création d'une variable globale", b: "La transmission des propriétés d'une classe mère à une classe fille", c: "L'inclusion d'une bibliothèque", correct: "b" },
            { question: "Quelle est la bonne façon d'inclure la bibliothèque standard d'entrée/sortie ?", a: "#include <input>", b: "#include <iostream>", c: "#import <io>", correct: "b" },
            { question: "Un constructeur de classe :", a: "Détruit l'objet à la fin du programme", b: "Est appelé lors de la création d'un objet", c: "Est utilisé pour afficher l'aide", correct: "b" },
            { question: "Quel opérateur permet l'allocation dynamique de mémoire ?", a: "delete", b: "new", c: "malloc", correct: "b" },
            { question: "Quelle est la signification de 'namespace' ?", a: "Un espace pour les noms de variables", b: "Une déclaration pour les fonctions d'espace", c: "Un regroupement logique pour éviter les conflits de noms", correct: "c" },
            { question: "Lequel des accès suivants est le plus restrictif pour les membres d'une classe ?", a: "public", b: "protected", c: "private", correct: "c" },
            { question: "Le destructeur d'une classe est précédé du symbole :", a: "#", b: "*", c: "~", correct: "c" }
        ]
    },
    python: {
        title: "8. Python",
        icon: "🐍",
        questions: [
            { question: "Quel mot-clé est utilisé pour définir une fonction en Python ?", a: "function", b: "def", c: "func", correct: "b" },
            { question: "Comment affiche-t-on quelque chose dans la console en Python ?", a: "cout << 'Hello'", b: "printf('Hello')", c: "print('Hello')", correct: "c" },
            { question: "Lequel est un type de données mutable ?", a: "Tuple", b: "String", c: "List (Liste)", correct: "c" },
            { question: "Quel caractère est utilisé pour l'indentation de bloc ?", a: "{}", b: ":", c: "()", correct: "b" },
            { question: "Comment comment-on une seule ligne de code ?", a: "// Commentaire", b: "# Commentaire", c: "/* Commentaire */", correct: "b" },
            { question: "Quel module est utilisé pour les opérations mathématiques avancées ?", a: "system", b: "math", c: "random", correct: "b" },
            { question: "Quel est l'indice du premier élément d'une liste ?", a: "1", b: "0", c: "-1", correct: "b" },
            { question: "Que signifie 'PIP' ?", a: "Python Installation Package", b: "Preferred Installer Program", c: "Package Installer for Python", correct: "c" },
            { question: "Quelle est la fonction pour connaître le type d'une variable ?", a: "typeof()", b: "type()", c: "type()", correct: "b" },
            { question: "Quel mot-clé est utilisé pour sortir d'une boucle ?", a: "exit", b: "break", c: "return", correct: "b" }
        ]
    },
    informatique_fondamentale: {
        title: "9. Informatique Fondamentale",
        icon: "📚",
        questions: [
            { question: "Combien de valeurs différentes peut stocker un bit ?", a: "1", b: "2", c: "4", correct: "b" },
            { question: "Que signifie 'OS' en informatique ?", a: "Output System", b: "Operating System", c: "Open Source", correct: "b" },
            { question: "Le code binaire utilise la base :", a: "10", b: "16", c: "2", correct: "c" },
            { question: "Quel protocole est utilisé pour les pages web sécurisées ?", a: "HTTP", b: "FTP", c: "HTTPS", correct: "c" },
            { question: "Quel terme désigne la vitesse de transmission de données ?", a: "Latence", b: "Bande passante (Bandwidth)", c: "Résolution", correct: "b" },
            { question: "Qu'est-ce qu'un algorithme ?", a: "Un ensemble fini d'instructions pour résoudre un problème", b: "Un type de virus", c: "Un composant matériel", correct: "a" },
            { question: "Quel est le rôle d'un compilateur ?", a: "Exécuter le programme ligne par ligne", b: "Traduire le code source en langage machine", c: "Gérer la mémoire RAM", correct: "b" },
            { question: "Quel protocole permet d'envoyer des e-mails ?", a: "POP3", b: "IMAP", c: "SMTP", correct: "c" },
            { question: "Quelle est la différence entre un kilooctet (KB) et un kibioctet (KiB) ?", a: "KB = 1000 octets, KiB = 1024 octets", b: "KB = 1024 octets, KiB = 1000 octets", c: "Aucune différence", correct: "a" },
            { question: "Qu'est-ce qu'un pare-feu (Firewall) ?", a: "Un logiciel pour dessiner", b: "Un système qui filtre le trafic réseau", c: "Un outil pour compresser des fichiers", correct: "b" }
        ]
    },
    anglais_de_base: {
        title: "10. Anglais de Base",
        icon: "🇬🇧",
        questions: [
            { question: "Traduisez : 'What is your name?'", a: "Quel est ton âge ?", b: "Comment vas-tu ?", c: "Quel est ton nom ?", correct: "c" },
            { question: "Le verbe 'to go' au passé simple est :", a: "goed", b: "went", c: "gone", correct: "b" },
            { question: "Quel mot signifie 'ordinateur' ?", a: "Mouse", b: "Computer", c: "Keyboard", correct: "b" },
            { question: "Traduisez : 'The cat is on the table.'", a: "Le chat est sous la table.", b: "Le chat est sur la table.", c: "Le chien est sur la chaise.", correct: "b" },
            { question: "L'abréviation 'DIY' signifie :", a: "Do It Yourself", b: "Develop Your Ideas", c: "Digital Information Yellow", correct: "a" },
            { question: "Quel est l'équivalent de 'Bonjour' (salutation matinale) en anglais ?", a: "Good evening", b: "Good afternoon", c: "Good morning", correct: "c" },
            { question: "Quel mot est un pronom personnel (sujet) ?", a: "My", b: "Me", c: "They", correct: "c" },
            { question: "Comment dit-on 'livre' en anglais ?", a: "Notebook", b: "Book", c: "Pencil", correct: "b" },
            { question: "Quelle est la forme contractée de 'He is' ?", a: "His", b: "He's", c: "Hes'", correct: "b" },
            { question: "Quel adjectif est un synonyme de 'happy' ?", a: "Sad", b: "Joyful", c: "Angry", correct: "b" }
        ]
    }
};

// Variables Globales et Raccourcis DOM
let currentCategoryKey = null;
let userName = null;

const nameOverlay = document.getElementById('nameOverlay');
const categoryScreen = document.getElementById('categoryScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const quizEl = document.getElementById('quiz');
const categoryContainer = document.getElementById('categoryContainer');
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
const userNameDisplay = document.getElementById('userNameDisplay');
const historyUserName = document.getElementById('historyUserName');
const viewResultsBtn = document.getElementById('viewResultsBtn'); // Nouvelle référence


// --- 1. Gestion de l'utilisateur (Local Storage) ---

function init() {
    userName = localStorage.getItem('quizz_x_userName');
    if (userName) {
        nameOverlay.classList.add('hidden');
        showCategories();
        updateProfileDisplay(userName);
    } else {
        nameOverlay.classList.remove('hidden');
    }
    loadCategoriesScreen();
}

function setUserName() {
    const input = document.getElementById('userNameInput').value.trim();
    if (input.length > 2) {
        userName = input;
        localStorage.setItem('quizz_x_userName', userName);
        nameOverlay.classList.add('hidden');
        showCategories();
        updateProfileDisplay(userName);
    } else {
        alert("Veuillez entrer un nom valide (minimum 3 caractères).");
    }
}

function updateProfileDisplay(name) {
    userNameDisplay.textContent = name;
    profileBtn.classList.remove('hidden');
}

function getScoresHistory() {
    const history = localStorage.getItem(`quizz_x_scores_${userName}`);
    return history ? JSON.parse(history) : [];
}

function saveScore(category, score, total) {
    const history = getScoresHistory();
    const date = new Date().toLocaleString('fr-FR');
    history.push({ category: quizData[category].title, score, total, date });
    localStorage.setItem(`quizz_x_scores_${userName}`, JSON.stringify(history));
}


// --- 2. Navigation et Affichage ---

function hideAllScreens() {
    [categoryScreen, quizScreen, resultsScreen].forEach(el => el.classList.add('hidden'));
}

function showCategories() {
    hideAllScreens();
    categoryScreen.classList.remove('hidden');
}

function backToCategories() {
    currentCategoryKey = null;
    showCategories();
}

function loadCategoriesScreen() {
    categoryContainer.innerHTML = ''; // Nettoyer
    Object.keys(quizData).forEach(key => {
        const category = quizData[key];
        const card = document.createElement('div');
        card.classList.add('category-card', 'animated-slide-in');
        card.setAttribute('data-category', key);
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.title}</h3>
            <p>${category.questions.length} Questions</p>
            <button onclick="startQuiz('${key}')">Commencer</button>
        `;
        // Ajouter l'effet de hover "jeu de lumière"
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        categoryContainer.appendChild(card);
    });
}

function startQuiz(categoryKey) {
    currentCategoryKey = categoryKey;
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    document.getElementById('quizTitle').textContent = quizData[categoryKey].title;
    loadQuizQuestions(quizData[categoryKey].questions);
    
    // Réinitialiser l'état des boutons pour un nouveau quiz
    document.getElementById('submitBtn').classList.remove('hidden');
    document.getElementById('backToCategoriesBtn').classList.remove('hidden'); 
    document.getElementById('viewResultsBtn').classList.add('hidden'); 
}

function startNewQuiz() {
    // Nettoyage spécifique de l'état de correction
    if (currentCategoryKey) {
        quizEl.querySelectorAll('.options-list').forEach(list => {
            list.classList.remove('review-mode');
            // Réactiver les radios pour le nouveau quiz
            list.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = false);
            // Retirer les classes de correction
            list.querySelectorAll('label').forEach(label => {
                label.classList.remove('selected', 'correct-answer', 'incorrect-selection');
            });
        });
    }
    // Relance le quiz de la catégorie actuelle
    startQuiz(currentCategoryKey);
}

function loadQuizQuestions(questions) {
    quizEl.innerHTML = ''; // Nettoyer
    questions.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question-block', 'animated-slide-in');
        
        // Construction des options (on suppose a, b, c)
        const options = ['a', 'b', 'c'];
        let optionsHTML = options.map(optKey => {
            const optionText = data[optKey];
            return `
                <li>
                    <input type="radio" name="q${index}" id="q${index}${optKey}" value="${optKey}" onchange="updateOptionStyle(this)">
                    <label for="q${index}${optKey}">${optionText}</label>
                </li>
            `;
        }).join('');
        
        questionElement.innerHTML = `
            <h3 class="question-title">${data.question}</h3>
            <ul class="options-list">${optionsHTML}</ul>
        `;
        quizEl.appendChild(questionElement);
    });
}

// Fonction pour mettre en bleu l'option sélectionnée 
function updateOptionStyle(radioInput) {
    // S'assurer que le mode correction n'est pas actif pour éviter les conflits
    if (radioInput.closest('.options-list').classList.contains('review-mode')) {
        return; 
    }
    
    // Trouve l'élément <ul> le plus proche (la liste d'options pour cette question)
    const list = radioInput.closest('.options-list');
    
    // 1. Désélectionne tous les labels de cette question
    list.querySelectorAll('label').forEach(label => label.classList.remove('selected'));
    
    // 2. Sélectionne le label de l'option cliquée
    const label = list.querySelector(`label[for="${radioInput.id}"]`);
    if (label) {
        label.classList.add('selected');
    }
}

// --- 3. Soumission et Score ---

function getSelected(qIndex) {
    const answerEls = document.getElementsByName(`q${qIndex}`);
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.value;
        }
    });
    return answer;
}

function submitQuiz() {
    let score = 0;
    const currentQuestions = quizData[currentCategoryKey].questions;
    const totalQuestions = currentQuestions.length;
    let allAnswered = true;

    // Phase 1: Vérification et Calcul du Score
    currentQuestions.forEach((data, index) => {
        const selectedAnswer = getSelected(index);
        
        if (!selectedAnswer) {
            allAnswered = false;
        }
        
        if (selectedAnswer === data.correct) {
            score++;
        }
    });

    if (!allAnswered) {
        alert("Veuillez répondre à toutes les questions avant de soumettre.");
        return;
    }

    // Sauvegarde temporaire du score pour l'affichage final
    localStorage.setItem('temp_quiz_score', score);
    
    // Phase 2: Affichage de la Correction sur place (Vert pour la bonne, Rouge pour la mauvaise sélection)
    currentQuestions.forEach((data, index) => {
        const selectedAnswer = getSelected(index);
        const questionBlock = quizEl.children[index];
        const optionsList = questionBlock.querySelector('.options-list');
        
        // 1. Ajouter le mode 'review' et désactiver les radios
        optionsList.classList.add('review-mode');
        optionsList.querySelectorAll('input[type="radio"]').forEach(input => {
            input.disabled = true;
        });

        // 2. Appliquer la correction visuelle
        const correctLabel = optionsList.querySelector(`label[for="q${index}${data.correct}"]`);
        
        if (correctLabel) {
            // Affiche toujours la bonne réponse en VERT
            correctLabel.classList.add('correct-answer');
            correctLabel.classList.remove('selected'); 
        }

        if (selectedAnswer && selectedAnswer !== data.correct) {
            // Si l'utilisateur a répondu, et que c'est FAUX : affiche sa sélection en ROUGE
            const incorrectLabel = optionsList.querySelector(`label[for="q${index}${selectedAnswer}"]`);
            if (incorrectLabel) {
                incorrectLabel.classList.add('incorrect-selection');
                incorrectLabel.classList.remove('selected'); 
            }
        } else if (selectedAnswer === data.correct) {
            // Si l'utilisateur a répondu CORRECTEMENT, on s'assure que le VERT écrase le BLEU
            correctLabel.classList.add('correct-answer');
            correctLabel.classList.remove('selected');
        }
    });
    
    // Phase 3: Gestion des boutons
    document.getElementById('submitBtn').classList.add('hidden');
    document.getElementById('viewResultsBtn').classList.remove('hidden'); // Montrer le bouton pour aller aux résultats
    document.getElementById('backToCategoriesBtn').classList.add('hidden'); // Cacher retour aux catégories
}

function displayResultsAndFinalize() {
    const score = parseInt(localStorage.getItem('temp_quiz_score'));
    const total = quizData[currentCategoryKey].questions.length;

    // Sauvegarde finale du score
    saveScore(currentCategoryKey, score, total);
    
    // Affichage des résultats
    displayResults(score, total);
}


function displayResults(score, total) {
    hideAllScreens();
    resultsScreen.classList.remove('hidden');

    const percentage = (score / total) * 100;
    
    document.getElementById('resultTitle').textContent = `Résultats pour ${quizData[currentCategoryKey].title.substring(3)}`;
    document.getElementById('finalScoreText').innerHTML = `${userName}, vous avez obtenu ${score} / ${total} points (${percentage.toFixed(0)}%)`;

    let message = "";
    // Messages sans étoiles comme demandé
    if (percentage === 100) {
        message = "Félicitations ! Score parfait.";
    } else if (percentage >= 70) {
        message = "Excellent travail ! Une très bonne maîtrise du sujet.";
    } else if (percentage >= 40) {
        message = "Bien ! Quelques révisions vous permettront de progresser.";
    } else {
        message = "Il est temps de revoir les bases. Vous y arriverez !";
    }
    document.getElementById('finalMessageText').textContent = message;
    
    // Configuration de l'affichage des boutons de résultats
    document.getElementById('historySection').classList.add('hidden');
    document.querySelector('.score-summary').classList.remove('hidden');
}


// --- 4. Affichage de l'historique des scores ---

function showScores() {
    hideAllScreens();
    resultsScreen.classList.remove('hidden');

    document.getElementById('historySection').classList.remove('hidden');
    document.querySelector('.score-summary').classList.add('hidden'); // Cache le résumé du dernier quiz

    const history = getScoresHistory();
    const historyList = document.getElementById('scoreHistoryList');
    historyList.innerHTML = ''; // Nettoyer

    historyUserName.textContent = userName;
    
    if (history.length === 0) {
        historyList.innerHTML = `<li class="no-score">Aucun score enregistré pour l'instant.</li>`;
    } else {
        history.reverse().forEach(item => { // Afficher les plus récents en premier
            const listItem = document.createElement('li');
            listItem.classList.add('score-item');
            listItem.innerHTML = `
                <span class="category-name">${item.category.substring(3)}</span>
                <span class="score-value">${item.score}/${item.total}</span>
                <span class="score-date">${item.date}</span>
            `;
            historyList.appendChild(listItem);
        });
    }
}


// --- 5. Fonctionnalités de Partage (Vérifiées) ---

// Toggle du Menu de Profil
function toggleProfileMenu() {
    profileMenu.classList.toggle('hidden');
}

// Partage du site (lien uniquement)
function shareSite() {
    const siteMessage = `Rejoins-moi sur QUIZZ_X pour tester tes compétences en tech et électronique ! ${SITE_URL}`;
    if (navigator.share) {
        navigator.share({
            title: 'QUIZZ_X - Apprends en t’amusant !',
            text: siteMessage,
            url: SITE_URL,
        }).catch(error => {
            console.error('Erreur de partage:', error);
            copyToClipboard(siteMessage);
        });
    } else {
        copyToClipboard(siteMessage);
    }
}

// Fonction utilitaire pour obtenir le message de partage du SCORE
function getShareMessage(score, total) {
    const quizTitle = quizData[currentCategoryKey].title.substring(3); 
    const percentage = (score / total) * 100;
    
    let message = `🚀 J'ai terminé le quiz "${quizTitle}" sur QUIZZ_X ! `;
    message += `Mon score : ${score}/${total} (${percentage.toFixed(0)}%) ! Viens tester tes connaissances ici : ${SITE_URL}`; 
    
    return message;
}

// Partage WhatsApp 
function shareWhatsApp() {
    const finalScoreText = document.getElementById('finalScoreText').textContent;
    const match = finalScoreText.match(/(\d+)\s\/\s(\d+)/);

    if (match) {
        const score = parseInt(match[1]);
        const total = parseInt(match[2]);
        const message = getShareMessage(score, total);
        
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert("Impossible de trouver le score pour le partage. Veuillez soumettre le quiz d'abord.");
    }
}

// Partage générique 
function shareGeneric() {
    const finalScoreText = document.getElementById('finalScoreText').textContent;
    const match = finalScoreText.match(/(\d+)\s\/\s(\d+)/);

    if (match) {
        const score = parseInt(match[1]);
        const total = parseInt(match[2]);
        const message = getShareMessage(score, total);
        
        if (navigator.share) {
            navigator.share({
                title: 'QUIZZ_X - Mon Score',
                text: message,
                url: SITE_URL,
            }).catch((error) => {
                console.error('Erreur de partage', error);
                copyToClipboard(message);
            });
        } else {
            copyToClipboard(message);
        }
    } else {
        alert("Impossible de trouver le score pour le partage. Veuillez soumettre le quiz d'abord.");
    }
}

// Fonction de secours pour copier le texte
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Lien/Score copié dans le presse-papiers !");
    }).catch(err => {
        console.error('Erreur de copie:', err);
        alert("Impossible de copier. Veuillez noter le lien : " + SITE_URL);
    });
}

// Lancement de l'initialisation
document.addEventListener('DOMContentLoaded', init);

// Fermer le menu si on clique ailleurs
document.addEventListener('click', (e) => {
    if (profileMenu && !profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
        profileMenu.classList.add('hidden');
    }
});