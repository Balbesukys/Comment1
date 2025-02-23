// listeners.js

export const addCommentListener = (buttonId, inputNameId, inputTextId, submitCallback) => {
    document.getElementById(buttonId).addEventListener('click', async () => {
        const name = document.getElementById(inputNameId).value.trim();
        const text = document.getElementById(inputTextId).value.trim();

        if (name && text) {
            await submitCallback(name, text);
            document.getElementById(inputNameId).value = ''; // Очистка поля имени
            document.getElementById(inputTextId).value = ''; // Очистка поля комментария
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
};

export const addLikeListener = (likeButtonClass, updateLikeCallback) => {
    document.addEventListener('click', (event) => {
        if (event.target.matches(likeButtonClass)) {
            const index = event.target.dataset.index;
            updateLikeCallback(index);
        }
    });
};

export const addQuoteListener = (quoteButtonClass, quoteCommentCallback) => {
    document.addEventListener('click', (event) => {
        if (event.target.matches(quoteButtonClass)) {
            const index = event.target.dataset.quote;
            quoteCommentCallback(index);
        }
    });
};
