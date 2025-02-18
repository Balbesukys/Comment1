import { updateComments, userComments } from "./modules/comments.js";
import { renderCommentsFunction } from "./modules/render.js";
// import { renderComments } from "./modules/renderComments.js";
// import { addEventHandlers } from "./modules/eventHandlers.js";

fetch("https://wedev-api.sky.pro/api/v1/alexarh/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    updateComments(data.comments);
    renderCommentsFunction(); // Отображаем комментарии при загрузке
  });
// document.addEventListener("DOMContentLoaded", () => {
//   renderComments(userComments); // Отображаем комментарии при загрузке
//   addEventHandlers(userComments, renderComments); // Передаем массив комментариев и рендер-функцию
// });
renderCommentsFunction();
console.log(userComments);
