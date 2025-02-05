// src/commentModule.js
let comments = [
    {
        name: "Роман М.",
        dateTime: "16.01.25 12:24",
        text: "Первый комментарий",
        likes: 10,
        liked: false,
        replies: []
    },
    {
        name: "Алексей А.",
        dateTime: "16.01.25 19:58",
        text: "Мне нравится как оформлена эта страница!",
        likes: 105,
        liked: true,
        replies: []
    }
];
// Экспортируйте переменную comments
export { comments };

// Остальные функции
export function getComments() {
    return comments;
}

export function addComment(name, text, dateTime) {
    comments.push({
        name,
        dateTime,
        text,
        likes: 0,
        liked: false,
        replies: []
    });
}

export function toggleLike(index) {
    const comment = comments[index];
    comment.liked = !comment.liked;
    comment.likes += comment.liked ? 1 : -1;
}

export function addReply(index, name, text) {
    comments[index].replies.push({ name, text });
}