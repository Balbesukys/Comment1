// modules/eventHandlers.js
export function replyToComment(comments, index, renderFunction) {
    const replyName = prompt("Введите ваше имя для ответа:");
    const replyText = prompt("Введите ваш ответ:");

    if (replyName && replyText) {
        const reply = {
            name: replyName,
            text: replyText
        };
        comments[index].replies.push(reply);
        renderFunction(comments); // Перерисовываем комментарии
    }
}

export function toggleLike(comments, index, renderFunction) {
    const comment = comments[index];
    comment.liked = !comment.liked;
    comment.likes += comment.liked ? 1 : -1;

    renderFunction(comments); // Перерисовываем комментарии
}

export function addEventHandlers(comments, renderFunction) {
    const buttonEL = document.getElementById('submitComment');
    const nameInput = document.getElementById('nameInput');
    const textInput = document.getElementById('textInput');

    buttonEL.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        const dateTime = new Date().toLocaleString('ru-RU');
        const newComment = {
            name: name,
            dateTime: dateTime,
            text: text,
            likes: 0,
            liked: false,
            replies: []
        };

        comments.push(newComment);
        nameInput.value = '';
        textInput.value = '';

        renderFunction(comments); // Обновляем комментарии после добавления нового
    });
}
