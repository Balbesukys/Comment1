// modules/comments.js
export let userComments = [
  // {
  //   name: "Роман М.",
  //   date: "16.01.25 12:24",
  //   text: "Первый комментарий",
  //   likes: 10,
  //   isLiked: false,
  //   // replies: [],
  // },
  // {
  //   name: "Алексей А.",
  //   date: "16.01.25 19:58",
  //   text: "Мне нравится как оформленна эта страница!",
  //   likes: 105,
  //   isLiked: false,
  //   // replies: [],
  // },
];

export const updateComments = (newComments) => {
  userComments = newComments;
};
