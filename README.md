# ⚡️ QUIZZ_X : La Plateforme Tech Interactive

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Technology: HTML/CSS/JS](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)](/)
[![Version](https://img.shields.io/badge/Version-1.0-brightgreen.svg)](/)

## 🚀 À Propos du Projet

**QUIZZ_X** est une plateforme web interactive conçue pour tester et renforcer les connaissances dans divers domaines techniques et fondamentaux, tels que l'Électricité, l'Électronique, la Programmation (C, C++, Python), et l'Architecture Informatique.

L'objectif est d'offrir une expérience utilisateur **claire et dynamique** pour une révision efficace des concepts clés de la technologie.

## ✨ Fonctionnalités Principales

* **Quiz Thématiques :** Une variété de catégories (10+) avec 10 questions par quiz, couvrant des sujets allant de l'Arduino à l'Anglais technique.
* **Correction Visuelle Avancée :** Après la soumission, l'utilisateur voit immédiatement :
    * **Bleu :** Sa sélection (si elle n'est ni correcte, ni incorrecte).
    * **Vert :** La bonne réponse.
    * **Rouge :** Sa mauvaise sélection (barrée).
* **Thème Lumineux :** Une interface moderne et claire (comme demandé !) pour une lecture agréable.
* **Gestion de Profil :** Enregistrement local du nom d'utilisateur et affichage du logo en haut à droite.
* **Historique des Scores :** Suivi des performances passées par catégorie, stocké localement.
* **Partage Social :** Fonctionnalités intégrées pour partager son score sur WhatsApp ou via la fonction de partage générique du système.

## 🛠 Technologies Utilisées

Ce projet est une application web statique minimaliste et efficace, construite uniquement avec :

* **HTML5** : Structure du contenu.
* **CSS3** : Mise en page, design, animations, et le thème clair.
* **JavaScript (ES6+)** : Logique de l'application, gestion des quiz, calcul des scores, et stockage des données utilisateur (Local Storage).

## 💡 Comment Démarrer (Localement)

Pour exécuter ce projet sur votre machine locale :

1.  **Cloner le dépôt** (si vous êtes sur un dépôt Git) :
    ```bash
    git clone [URL_DE_VOTRE_DEPOT]
    ```
2.  **Ouvrir le dossier** :
    ```bash
    cd QUIZZ_X
    ```
3.  **Lancer l'application :** Ouvrez simplement le fichier `index.html` dans votre navigateur web préféré (Chrome, Firefox, etc.).

L'application est conçue pour être "client-side", donc aucun serveur ou installation complexe n'est requis.

## 📁 Structure des Fichiers

| Fichier | Description |
| :--- | :--- |
| `index.html` | La page principale de l'application, contient la structure HTML de l'overlay, du header, et des différents écrans (Catégories, Quiz, Résultats). |
| `style.css` | Contient toutes les règles de style : thème clair, centrage de la page de connexion, mise en forme des questions/réponses, et les styles de correction (bleu/vert/rouge). |
| `script.js` | Le cœur de l'application : données du quiz, logique de navigation, gestion du Local Storage, calcul du score, et application des styles de correction après la soumission. |
| `README.md` | Ce fichier de documentation. |

## 👤 Design et Concept

**Design et Concept par Max_Adis** (comme indiqué dans le footer de l'application).

---
*Ce projet est mis à disposition sous licence MIT.*
