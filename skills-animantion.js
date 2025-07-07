const skillsList = [
  // Llenguatges de Programació
  "GO", "React (JavaScript)", "PHP", "Python", "SQL (MariaDB/MySQL)",
  // Desenvolupament Web
  "HTML", "CSS", "JavaScript", "LAMP stack", "WordPress (WooCommerce)", "PrestaShop", "phpMyAdmin",
  // Big Data
  "Eines de Big Data (Sepe)", "Hadoop (Cloudera)", "R",
  // Cloud Computing
  "Microsoft Azure (AI Fundamentals)", "Microsoft 365 Fundamentals", "Google Drive", "OneDrive", "Dropbox", "iCloud",
  // Bases de Dades
  "MariaDB", "MySQL",
  // Metodologies Àgils
  "Scrum", "Agile (Barcelona Activa)",
  // Intel·ligència Artificial
  "Eines de IA (Taller de prompts)", "Reconeixement d'imatges", "Azure AI",
  // Ciberseguretat
  "Conceptes introductoris (SEPE)",
  // Blockchain
  "Aplicacions en Indústria 4.0",
  // Altres
  "Test Driven Development (TDD)", "Eines de visualització de dades", "Realitat Augmentada", "Git (implícit per desenvolupament modern)"
];

document.addEventListener('DOMContentLoaded', () => {
    const skillsOverlay = document.getElementById('skills-overlay');
    if (!skillsOverlay) {
        console.error('Skills overlay container not found!');
        return;
    }

    const minDisplayTime = 3000; // Minimum time a skill is visible (ms)
    const maxDisplayTime = 7000; // Maximum time a skill is visible (ms)
    const minIntervalTime = 500;  // Minimum time between new skills appearing (ms)
    const maxIntervalTime = 2000; // Maximum time between new skills appearing (ms)
    const maxSkillsOnScreen = 8; // Maximum number of skills visible at once

    let currentSkillsOnScreen = 0;

    function getRandomSkill() {
        return skillsList[Math.floor(Math.random() * skillsList.length)];
    }

    function getRandomPosition() {
        // Ensure skills are not too close to the edges
        const top = Math.random() * 80 + 10; // % from top (10% to 90%)
        const left = Math.random() * 80 + 10; // % from left (10% to 90%)
        return { top: `${top}%`, left: `${left}%` };
    }

    function displaySkill() {
        if (currentSkillsOnScreen >= maxSkillsOnScreen) {
            // Schedule next attempt if max skills are already on screen
            scheduleNextSkill();
            return;
        }

        const skillText = getRandomSkill();
        const skillElement = document.createElement('span');
        skillElement.classList.add('skill-item');
        skillElement.textContent = skillText;

        const position = getRandomPosition();
        skillElement.style.top = position.top;
        skillElement.style.left = position.left;

        skillsOverlay.appendChild(skillElement);
        currentSkillsOnScreen++;

        // Force reflow to ensure transition is applied
        void skillElement.offsetWidth; 

        // Fade in
        skillElement.style.opacity = 1;

        const displayDuration = Math.random() * (maxDisplayTime - minDisplayTime) + minDisplayTime;

        // Fade out and remove
        setTimeout(() => {
            skillElement.style.opacity = 0;
            setTimeout(() => {
                if (skillElement.parentNode === skillsOverlay) {
                    skillsOverlay.removeChild(skillElement);
                }
                currentSkillsOnScreen--;
            }, 500); // Corresponds to CSS transition time
        }, displayDuration);
        
        scheduleNextSkill();
    }

    function scheduleNextSkill() {
        const interval = Math.random() * (maxIntervalTime - minIntervalTime) + minIntervalTime;
        setTimeout(displaySkill, interval);
    }

    // Start the animation
    scheduleNextSkill();
});
