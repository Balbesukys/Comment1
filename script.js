import { renderCommentsFunction } from "./modules/render.js";
import { getDataUserComments } from "./modules/functions.js";
// import { renderComments } from "./modules/renderComments.js";
// import { addEventHandlers } from "./modules/eventHandlers.js";
getDataUserComments(); //получение данных с сервера (комментарии)
// document.addEventListener("DOMContentLoaded", () => {
//   renderComments(userComments); // Отображаем комментарии при загрузке
//   addEventHandlers(userComments, renderComments); // Передаем массив комментариев и рендер-функцию
// });
renderCommentsFunction(); //рендер комментариев
