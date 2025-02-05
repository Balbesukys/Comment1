export function renderComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<strong>${comment.name}</strong>: ${comment.text}`;
        commentsContainer.appendChild(commentElement);
    });
}