// uiModule.js
export function renderComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer'); 
    commentsContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом

    comments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'new-comment';

        commentDiv.innerHTML = `
            <div class="comment-header">
                <strong>${comment.name}</strong> <span>${new Date().toLocaleString()}</span>
            </div>
            <div class="comment-body">${comment.text}</div>
            <div class="comment-footer">
                <div class="likes">
                    <span class="likes-counter">0</span>
                    <button class="like-button">❤️</button>
                </div>
                <div class="reply">
                    <button class="reply-button" data-index="${index}">Ответить</button>
                </div>
            </div>
            <div class="replies"></div>
            <div class="reply-input" style="display:none;">
                <input type="text" class="reply-name" placeholder="Ваше имя">
                <textarea class="reply-text" placeholder="Ваш ответ"></textarea>
                <button class="submit-reply">Отправить</button>
            </div>
        `;

        // Отображаем ответы к комментарию, если они есть
        if (comment.replies && comment.replies.length > 0) {
            const repliesContainer = commentDiv.querySelector('.replies');
            comment.replies.forEach(reply => {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'reply-comment';
                replyDiv.innerHTML = `
                    <strong>${reply.name}</strong> <span>${reply.text}</span>
                `;
                repliesContainer.appendChild(replyDiv);
            });
        }

        commentsContainer.appendChild(commentDiv);
    });
}
