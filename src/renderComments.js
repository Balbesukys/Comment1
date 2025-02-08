let comments = [
    { name: "Роман М.", text: "Первый комментарий!1.", likes: 10, likedByUser: false },
    { name: "Алексей А.", text: "Мне нравится как оформлена эта страница! 2.", likes: 105, likedByUser: false },
];

// Функция для обновления HTML-кода комментариев
function renderComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = ''; // Очищаем текущий контент

    comments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.setAttribute('data-index', index);
        commentDiv.innerHTML = `
            <strong>${comment.name}</strong>
            <p>${comment.text}</p>
            <button class="like-button ${comment.likedByUser ? 'liked' : ''}">
                ${comment.likedByUser ? '❤️' : '🤍'} ${comment.likes}
            </button>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}




