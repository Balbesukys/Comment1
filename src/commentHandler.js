// modules/commentHandler.js
export function addComment(name, text) {
    const commentsContainer = document.getElementById('commentsContainer');
    const commentElement = document.createElement('div');
    
    commentElement.innerHTML = `<strong>${name}</strong>: ${text}`;
    commentsContainer.appendChild(commentElement);
}

export function setupCommentSubmission(submitButton, nameInput, textInput, addComment) {
    if (submitButton && nameInput && textInput) {
        submitButton.onclick = () => {
            const name = nameInput.value.trim();
            const text = textInput.value.trim();
            
            if (name && text) {
                addComment(name, text);
                nameInput.value = ''; // Очистить поле после отправки
                textInput.value = ''; // Очистить поле после отправки
            } else {
                console.error('Имя и текст комментария должны быть заполнены.');
            }
        };
    } else {
        console.error('Не удалось найти один или несколько элементов для обработки комментариев');
    }
}
