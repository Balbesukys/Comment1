import { updateComments, userComments } from "./comments.js";
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
    if (nameInput.value === "" || nameInput.value === " ") {
      nameInput.classList.add("error");
      nameInput.placeholder = "Это поле не может быть пустым";
      return;
    } else if (textInput.value === "" || textInput.value === " ") {
      textInput.classList.add("error");
      textInput.placeholder = "Это поле не может быть пустым";
      return;
    } else {
      nameInput.classList.remove("error");
      textInput.classList.remove("error");
      textInput.placeholder = "Введите Ваш коментарий";
      nameInput.placeholder = "Введите Ваше имя";
    } //валидация пустых полей

    const dateTime = new Date().toLocaleString("ru-RU");
    const newComment = {
      name: nameInput.value,
      date: dateTime,
      text: textInput.value,
      likes: 0,
      isLiked: false,
    };

    fetch("https://wedev-api.sky.pro/api/v1/alexarh/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.result === "ok") {
          getDataUserComments();
        }
      });

    textInput.value = ""; //очистка полей ввода
    nameInput.value = "";
  });
  renderCommentsFunction();
};
