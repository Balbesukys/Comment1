// modules/dateUtils.js

export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    // Форматируем дату в читаемый формат, например: "1 января 2023, 12:00"
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleString('ru-RU', options);
};
