const eye = document.querySelector('.eye');
const textElement = document.getElementById('eye-text');

let isFirstTime = true;
let hoverCount = 0;

const phrases = [
    "Я видел, как создавался этот код.",
    "Ты ищешь истину или такой же как остолные?",
    "Миф №1: *Этот глаз никогда не спит*",
    "Знаешь ли ты, что за тобой следят?",
    "Здесь спрятано больше, чем ты думаешь.",
    "Не задерживайся здесь слишком долго...",
    "Зачем ты тут?",
    "Знаешь ли.. Некоторые вещи лучше не знать..",
    "Миф №2: Я создал Меллта)",
    "Ты меня отвлекаешь...",
    "Похоже, ты такой же жалкий, как остальные...\n Оно и неудивительно...",
    "Жалкая душа..",
];

eye.addEventListener('mouseenter', () => {
    hoverCount++; 
    
    if (hoverCount >= 10) {
        showFinalScare();
        return;
    }

    eye.style.backgroundImage = "url('texture/eye_open.png')";
    
    if (isFirstTime) {
        textElement.textContent = "О, здравствуй, путник...";
        isFirstTime = false;
    } else {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        textElement.textContent = phrases[randomIndex];
    }
    
    textElement.style.opacity = "1";
});

eye.addEventListener('mouseleave', () => {
    eye.style.backgroundImage = "url('texture/eye_close.png')";
    textElement.style.opacity = "0";
});

function showFinalScare() {
    // 1. Добавляем класс тряски всему телу страницы
    document.body.classList.add('shake-screen');
    
    // 2. Создаем резкую красную вспышку на весь экран
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.9)'; // Ярко-красный
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '10000';
    overlay.style.cursor = 'none'; // Убираем курсор для жути

    // 3. Текст "ХВАТИТ"
    const scareText = document.createElement('h1');
    scareText.textContent = 'Х В А Т И Т';
    scareText.style.color = 'black';
    scareText.style.fontSize = '150px';
    scareText.style.fontWeight = 'bold';
    scareText.style.fontFamily = 'serif';
    scareText.style.textShadow = '0 0 20px white';
    
    overlay.appendChild(scareText);
    document.body.appendChild(overlay);

    // 4. Через 1.5 секунды перекидываем на главную
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 1500);
}