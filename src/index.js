import { renderComments } from './uiModule.js';
import { setupEventHandlers } from './eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    const comments = [];
    
    renderComments(comments); // Начальное рендеринг комментариев
    setupEventHandlers(comments, renderComments); // Установка обработчиков событий
    
});
