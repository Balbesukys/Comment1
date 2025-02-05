// src/eventHandlers.js
import { addComment, addReply, toggleLike, comments } from './commentModule.js';
import { renderComments } from './uiModule.js';

// Ваши обработчики событий...
window.replyToComment = function(name, text) {
    // Найдите индекс комментария для ответа
    const replyToIndex = comments.findIndex(comment => comment.name === name && comment.text === text);
    textInput.dataset.replyTo = replyToIndex;
    nameInput.value = name; 
    textInput.focus();
};
const buttonEL = document.querySelector('.add-comment-button'); 
const nameInput = document.querySelector('.add-comment-name'); 
const textInput = document.querySelector('.add-comment-text'); 

buttonEL.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    let hasError = false;

    if (!name) {
        nameInput.classList.add('error');
        hasError = true;
    } else {
        nameInput.classList.remove('error');
    }

    if (!text) {
        textInput.classList.add('error');
        hasError = true;
    } else {
        textInput.classList.remove('error');
    }

    if (hasError) return;

    const dateTime = new Date().toLocaleString('ru-RU', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    if (textInput.dataset.replyTo) {
        const replyToIndex = textInput.dataset.replyTo;
        addReply(replyToIndex, name, text);
        textInput.dataset.replyTo = '';
    } else {
        addComment(name, text, dateTime);
    }

    nameInput.value = '';
    textInput.value = '';
    renderComments();
});

// Функция переключения лайка
window.toggleLike = toggleLike;

// Функция для обработки нажатия на кнопку "Ответить"
window.replyToComment = function(name, text) {
    const replyToIndex = comments.findIndex(comment => comment.name === name && comment.text === text);
    textInput.dataset.replyTo = replyToIndex;
    nameInput.value = name;
    textInput.focus();
};
