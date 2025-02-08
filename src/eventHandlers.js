// Упрощенный пример, с фокусом на ответах
let comments = [];
let replyingToIndex = null; // Индекс комментария, на который мы отвечаем

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
        `;

        // Отображаем ранее добавленные ответы
        if (comment.replies && comment.replies.length > 0) {
            const repliesContainer = commentDiv.querySelector('.replies');
            comment.replies.forEach(reply => {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'reply-comment';
                replyDiv.innerHTML = `
                    <strong>${reply.name}</strong>: ${reply.text}
                `;
                repliesContainer.appendChild(replyDiv);
            });
        }

        commentsContainer.appendChild(commentDiv);
    });
}

export function setupEventHandlers() {
    const submitButton = document.getElementById('submitComment');
    const nameInput = document.getElementById('nameInput');
    const textInput = document.getElementById('textInput');

    // Отправка комментария или ответа
    submitButton.onclick = () => {
        const name = sanitizeText(nameInput.value);
        const text = sanitizeText(textInput.value);

        if (name.trim() === '' || text.trim() === '') {
            alert("Имя и комментарий не могут быть пустыми.");
            
            return;
        }

        if (replyingToIndex !== null) {
            // Если мы отвечаем на комментарий
            comments[replyingToIndex].replies.push({ name, text });
            replyingToIndex = null; // Сбросим индекс, чтобы вернуться к обычному комментированию
        } else {
            // Обычный комментарий
            const newComment = { name, text, replies: [] };
            comments.push(newComment);
        }

        renderComments(comments);
        nameInput.value = ''; // Очищаем поля ввода
        textInput.value = ''; // Очищаем поля ввода
    };
    // eventHandlers.js

// Например, если это ваш обработчик для лайков:
function setupEventHandlers() {
    const commentsContainer = document.getElementById('commentsContainer');

    commentsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('like-button')) {
            const index = event.target.closest('.comment').getAttribute('data-index'); // Получаем индекс комментария
            const comment = comments[index];

            // Переключение состояния лайка
            comment.likedByUser = !comment.likedByUser;

            // Обновляем количество лайков
            comment.likedByUser ? comment.likes++ : comment.likes--;

            // Перерендерим комментарии, чтобы отобразить изменения
            renderComments();
        }
    });
}

// Проверка на дублирование функции
if (typeof setupEventHandlers === 'undefined') {
    setupEventHandlers();
}



    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('reply-button')) {
            replyingToIndex = event.target.getAttribute("data-index"); // Сохраним индекс комментария
        }
        if (event.target.classList.contains('like-button')) {
            const likeCounter = event.target.previousElementSibling;
            let currentLikes = parseInt(likeCounter.textContent);
            likeCounter.textContent = currentLikes + 1;
            event.target.disabled = true; // Отключение кнопки лайка
            event.target.textContent = "❤️"; // Измените текст кнопки
        }
    });
}

// Функция для очистки текста комментария
function sanitizeText(text) {
    return text.replace(/<[^>]*>/g, ''); // Удаление HTML-тегов
}

