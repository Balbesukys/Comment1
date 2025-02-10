// modules/renderComments.js
import { replyToComment, toggleLike } from './eventHandlers.js';

export function renderComments(comments) {
    const ulElement = document.getElementById('commentsContainer');
    ulElement.innerHTML = ''; // Очищаем текущее содержимое
    
    comments.forEach((comment, index) => {
        const commentHTML = `
            <li class="comment">
                <div class="comment-header">
                    <div>${comment.name}</div>
                    <div>${comment.dateTime}</div>
                </div>
                <div class="comment-body">
                    <div class="comment-text">${comment.text}</div>
                </div>
                <div class="comment-footer">
                    <button class="reply-button" id="reply-${index}">Ответить</button>
                    <div class="likes">
                        <span class="likes-counter">${comment.likes}</span>
                        <button class="like-button" id="like-${index}">❤️</button>
                    </div>
                </div>
                <div class="reply">
                    ${renderReplies(comment.replies)}
                </div>
            </li>`;
            
        ulElement.insertAdjacentHTML('beforeend', commentHTML); // Добавляем комментарий в DOM

        // Добавляем обработчики событий
        document.getElementById(`reply-${index}`).onclick = function() {
            replyToComment(comments, index, renderComments); // Передаем рендер функцию в обработчик
        };

        document.getElementById(`like-${index}`).onclick = function() {
            toggleLike(comments, index, renderComments); // Передаем рендер функцию в обработчик
        };
    });
}

function renderReplies(replies) {
    return replies.map(reply => `
        <div class="reply-comment">
            <div><strong>${reply.name}</strong>: ${reply.text}</div>
        </div>`).join('');
}
