const Base_Url = "https://jsonplaceholder.typicode.com/comments";

const getComment = () => {
  axios
    .get(Base_Url)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Error", response.status);
      }
    })
    .catch((error) => console.log(error));
};

// getComment();

const createComment = () => {
  const data = {
    postId: 121,
    name: "Maaz",
    email: "maazkkhan758@gmail.com",
    body: "Hi",
  };

  axios
    .post(Base_Url, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(response.data);
      } else {
        console.log("Error", response.status);
      }
    })
    .catch((error) => console.log(error));
};

//   createComment()

const updateComment = (id) => {
  const data = {
    postId: 121,
    name: "New comment",
    email: "maazkkhan758@gmail.com",
    body: "Hi",
  };

  axios
    .put(`${Base_Url}/${id}`, data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Error", response.status);
      }
    })
    .catch((error) => console.log(error));
};
// updateComment(5)

const deleteComment = (id) => {

  axios
    .delete(`${Base_Url}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Error", response.status);
      }
    })
    .catch((error) => console.log(error));
};

deleteComment(5)