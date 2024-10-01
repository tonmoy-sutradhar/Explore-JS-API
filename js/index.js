// console.log("index.html");
function displayUserName() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => UserName(data));
}

function UserName(data) {
  const ul = document.getElementById("user-id");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
