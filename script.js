AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// JavaScript for skill card navigation
let currentSkillIndex = 0;
const skillCards = document.querySelectorAll('.sliding-card');

function showNextSkill() {
    skillCards[currentSkillIndex].classList.remove('active');
    currentSkillIndex = (currentSkillIndex + 1) % skillCards.length;
    skillCards[currentSkillIndex].classList.add('active');
}

function showPreviousSkill() {
    skillCards[currentSkillIndex].classList.remove('active');
    currentSkillIndex = (currentSkillIndex - 1 + skillCards.length) % skillCards.length;
    skillCards[currentSkillIndex].classList.add('active');
}