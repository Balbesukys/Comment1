// script.js
import { comments } from './modules/comments.js'; // Один массив комментариев
import { renderComments } from './modules/renderComments.js';
import { addEventHandlers } from './modules/eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    renderComments(comments); // Отображаем комментарии при загрузке
    addEventHandlers(comments, renderComments); // Передаем массив комментариев и рендер-функцию
});
fetch('https://wedev-api.sky.pro/api/v1/alex-arkhipov/comments')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateComments(data.comments)
        renderUserComments()
    })