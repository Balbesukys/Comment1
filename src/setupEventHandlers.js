// Настройка обработчиков событий для лайков
function setupEventHandlers() {
    document.getElementById('commentsContainer').addEventListener('click', (event) => {
        if (event.target.classList.contains('like-button')) {
            const index = event.target.getAttribute('data-index');
            const comment = comments[index];

            // Переключаем состояние лайка
            comment.likedByUser = !comment.likedByUser;

            // Обновляем количество лайков
            if (comment.likedByUser) {
                comment.likes++;
            } else {
                comment.likes--;
            }

            // Обновляем стиль кнопки
            event.target.classList.toggle('liked', comment.likedByUser);

            // Обновляем текст кнопки
            event.target.innerHTML = `${comment.likedByUser ? '❤️' : '🤍'} ${comment.likes}`;
            
                    // Обновляем отображение комментариев
                    renderComments();
                }
            });
        }

        // Добавление нового комментария
        document.getElementById('submitComment').addEventListener('click', () => {
            const nameInput = document.getElementById('nameInput').value.trim();
            const textInput = document.getElementById('textInput').value.trim();

            // Проверка на пустой комментарий
            if (nameInput && textInput) {
                // Добавляем новый комментарий в массив
                comments.push({ name: nameInput, text: textInput, likes: 0, likedByUser: false });

                // Очищаем поля ввода
                document.getElementById('nameInput').value = '';
                document.getElementById('textInput').value = '';

                // Обновляем отображение комментариев
                renderComments();
            } else {
                alert('Пожалуйста, заполните все поля!');
            }
        });

        // Инициализация
        renderComments();
        setupEventHandlers();