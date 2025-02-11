// script.js
import { comments } from './modules/comments.js'; // Один массив комментариев
import { renderComments } from './modules/renderComments.js';
import { addEventHandlers } from './modules/eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    renderComments(comments); // Отображаем комментарии при загрузке
    addEventHandlers(comments, renderComments); // Передаем массив комментариев и рендер-функцию
});
