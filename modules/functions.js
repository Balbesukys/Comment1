import { updateComments } from "./comments.js";
import { renderCommentsFunction } from "./render.js";
export const getDataUserComments = () => {
  //функция получения данных от сервера ( массив комментариев)
  fetch("https://wedev-api.sky.pro/api/v1/alexarh/comments")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      updateComments(data.comments);
      renderCommentsFunction();
    });
};

export const addCommemt = () => {
  //добавление нового комментария
  const buttonEL = document.getElementById("submitComment");
  const nameInput = document.getElementById("nameInput");
  const textInput = document.getElementById("textInput");

  buttonEL.addEventListener("click", function () {
    //валидация пустых полей
    if (nameInput === "" || nameInput === " ") {
      nameInput.classList.add("error");
      nameInput.placeholder = "Это поле не может быть пустым";
      return;
    } else if (textInput === "" || textInput === " ") {
      textInput.classList.add("error");
      textInput.placeholder = "Это поле не может быть пустым";
      return;
    } else {
      nameInput.classList.remove("error");
      textInput.classList.remove("error");
      textInput.placeholder = "Введите Ваш коментарий";
      nameInput.placeholder = "Введите Ваше имя";
    }
  });
};
