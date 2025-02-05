// src/uiModule.js
import { getComments } from './commentModule.js';

const ulElement = document.querySelector('.comments');

export function renderComments() {
    const comments = getComments();
    ulElement.innerHTML = '';
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
                    <div class="likes">
                        <span class="likes-counter">${comment.likes}</span>
                        <button class="like-button ${comment.liked ? 'active' : ''}" onclick="window.toggleLike(${index})">❤️</button>
                    </div>
                     <div>
                        <button class="reply-button" onclick="window.replyToComment('${comment.name}', '${comment.text}')">Ответить</button>
                    </div>
                </div>
                <div class="reply">
                    ${renderReplies(comment.replies)}
                </div>
            </li>`;
        ulElement.innerHTML += commentHTML;
    });
}

export function renderReplies(replies) {
    return replies.map(reply => `
        <div class="reply-comment">
            <div><strong>${reply.name}</strong>: ${reply.text}</div>
        </div>`).join('');
}