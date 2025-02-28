import { userComments } from "./comments.js";
import { formatDate, userLike, addCommentListener } from "./listeners.js";

export const renderCommentsFunction = () => {
  const ulElement = document.getElementById("commentsContainer");
  const userCommentsHtml = userComments
    .map((userComment, index) => {
      const formattedDate = formatDate(userComment.date);
      return `<li data-quote="${index}" class="comment">
                <div class="comment-header">
                    <div>${userComment.author.name}</div>
                    <div>${formattedDate}</div>
                </div>
                <div class="comment-body">
                  <div class="comment-text">${userComment.text}</div>
                </div>
                <div class="comment-footer">
                    <div class="likes">
                        <span class="likes-counter">${userComment.likes}</span>
                        <button data-index="${index}" class="like-button ${
        userComment.isLiked ? "-active-like" : ""
      }"></button> 
                    </div>
                    
                </div>
               </li>`;
    })
    .join("");
  ulElement.innerHTML = userCommentsHtml;
  userLike();
  addCommentListener();
};