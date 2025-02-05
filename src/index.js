import { renderComments } from './uiModule.js';
import './eventHandlers.js'; // Подключение обработчиков событий
import { sanitizeText } from './sanitizeText.js'; // Импортируем функцию для очистки текста

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        const submitButton = document.getElementById('submitComment');
        const nameInput = document.getElementById('nameInput');
        const textInput = document.getElementById('textInput');
        if (submitButton) {
            submitButton.onclick = () => {
                const name = nameInput.value; // Значение должно быть доступно только если элемент существует
                const text = textInput.value;
                addComment(name, text); // Добавляем новый комментарий
            };
        } else {
            console.error('Element with ID submitComment not found');
        }
    });
    const comments = [
        { name: 'Роман М.', text: 'Первый комментарий!' },
        { name: 'Алексей А.', text: 'Мне нравится как оформлена эта страница!' }
    ];

    renderComments(comments); // Изначально рендерим комментарии

    // Функция для добавления нового комментария
    function addComment(name, text) {
        // Очистка имени и текста комментария
        const sanitizedName = sanitizeText(name);
        const sanitizedText = sanitizeText(text);

        comments.push({ name: sanitizedName, text: sanitizedText });
        renderComments(comments); // Рендерим обновленный список комментариев
    }

    // Обработка нажатия на кнопку "Добавить комментарий"
    const submitButton = document.getElementById('submitComment');
    if (submitButton) {
        submitButton.onclick = () => {
            const name = document.getElementById('nameInput').value;
            const text = document.getElementById('textInput').value;
            addComment(name, text); // Добавляем новый комментарий
        };
    } else {
        console.error('Element with ID submitComment not found');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const comments = [
        { name: 'Иван', text: 'Привет!' },
        { name: 'Мария', text: 'Как дела?' }
    ];

    renderComments(comments); // Изначально рендерим комментарии

    // Функция для добавления нового комментария
    function addComment(name, text) {
        comments.push({ name, text });
        renderComments(comments); // Рендерим обновленный список комментариев
    }

    // Обработка нажатия на кнопку "Добавить комментарий"
    const submitButton = document.getElementById('submitComment');
    if (submitButton) {
        submitButton.onclick = () => {
            const name = document.getElementById('nameInput').value;
            const text = document.getElementById('textInput').value;
            addComment(name, text); // Добавляем новый комментарий
        };
    } else {
        console.error('Element with ID submitComment not found');
    }
});
// Первоначальный рендеринг комментариев
renderComments();