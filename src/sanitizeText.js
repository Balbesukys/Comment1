// sanitizeText.js

export function sanitizeText(input) {
    // Заменяем потенциально опасные символы
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}
