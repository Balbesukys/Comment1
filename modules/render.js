import { userComments } from "./comments.js";

export const renderCommentsFunction = () => {
  const ulElement = document.getElementById("commentsContainer");
  const userCommentsHtml = userComments
    .map((userComment, index) => {
      return `<li class="comment">
                <div class="comment-header">
                    <div>${userComment.author.name}</div>
                    <div>${userComment.date}</div>
                </div>
                <div class="comment-body">
                    <div class="comment-text">${userComment.text}</div>
                </div>
                <div class="comment-footer">
                    <button class="reply-button" id="reply-${index}">Ответить</button>
                    <div class="likes">
                        <span class="likes-counter">${userComment.likes}</span>
                        <button class="like-button ${
                          userComment.isLiked ? "-active-like" : " "
                        }" id="like-${index}"></button>
                    </div>
                </div>
               </li>`;
    })
    .join("");
  ulElement.innerHTML = userCommentsHtml;
};
