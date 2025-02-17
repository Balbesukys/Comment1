import { updateComments, comments } from "./modules/comments.js";
import { renderComments } from "./modules/renderComments.js";
import { addEventHandlers } from "./modules/eventHandlers.js";

fetch("https://wedev-api.sky.pro/api/v1/alex-arkhipov/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.comments);
    updateComments(data.comments);
  });
document.addEventListener("DOMContentLoaded", () => {
  renderComments(comments); // Отображаем комментарии при загрузке
  addEventHandlers(comments, renderComments); // Передаем массив комментариев и рендер-функцию
});
