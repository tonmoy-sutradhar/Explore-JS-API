console.log("post connected");
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const postContainer = document.getElementById("div-container");
  for (const post of posts) {
    console.log(post);
    const PostDiv = document.createElement("div");
    PostDiv.classList.add("post");
    PostDiv.innerHTML = `
    <h4>User- ${post.userId}</h4>
    <h5>Post: title ${post.title}</h5>
    <p>Description: ${post.body}</p>
    `;
    postContainer.appendChild(PostDiv);
  }
}
loadPost();
// displayPost();
