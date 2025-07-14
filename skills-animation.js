const skillsList = [
  // Llenguatges de Programació
  "GO", "React", "JavaScript", "PHP", "SQL (MariaDB/MySQL)",
  // Desenvolupament Web
  "HTML", "CSS", "JavaScript", "LAMP stack",  "phpMyAdmin",
  // Big Data
  "Eines de Big Data ", "Hadoop ", "R",
  // Cloud Computing
  "Microsoft Azure", "Microsoft 365 Fundamentals", "Google Drive", "Dropbox"," IoT",
  // Bases de Dades
  "MariaDB", "MySQL",
  // Metodologies Àgils
  "Scrum", "Agile",
  // Intel·ligència Artificial
  " IA ", "MCP", "Vibecoding","Jules","Cursor",
  // Ciberseguretat
  "Conceptes ISO 27001",
  // Blockchain
  "Aplicacions en Indústria 4.0",
  // Altres
  "TDD", " Data visualisation", "Augmented Reality", "Git","Jira",
];

document.addEventListener('DOMContentLoaded', () => {
    const skillsOverlay = document.getElementById('skills-overlay');
    if (!skillsOverlay) {
        console.error('Skills overlay container not found!');
        return;
    }

    // Function to clone and append skills for a continuous loop
    function setupSkillAnimation() {
        skillsOverlay.innerHTML = ''; // Clear existing skills
        
        // Append original skills
        skillsList.forEach(skillText => {
            const skillElement = document.createElement('span');
            skillElement.classList.add('skill-item');
            skillElement.textContent = skillText;
            skillsOverlay.appendChild(skillElement);
        });

        // Append a second set of skills to create the seamless loop
        skillsList.forEach(skillText => {
            const skillElement = document.createElement('span');
            skillElement.classList.add('skill-item');
            skillElement.textContent = skillText;
            // Add a class to identify the cloned items for staggered animation
            skillElement.classList.add('skill-item-clone');
            skillsOverlay.appendChild(skillElement);
        });
    }

    setupSkillAnimation();
});
