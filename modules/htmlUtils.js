// modules/htmlUtils.js

export const sanitizeHtml = (value) => {
    const div = document.createElement('div');
    div.textContent = value; // Используем textContent для предотвращения XSS
    return div.innerHTML; // Возвращаем безопасный HTML
};
