"use strict";
// URL we'll fetch from:
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Get references to HTML elements
const loadBtn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

// When button is clicked, fetch users
loadBtn.addEventListener("click", async () => {
  userList.innerHTML = "<li>Loading...</li>";

  // 1. Fetch the data
  const response = await fetch(API_URL);

  // 2. Convert it to JSON
  const users = await response.json();

  // 3. Clear old content
  userList.innerHTML = "";

  // 4. Display users
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} — ${user.email}`;
    userList.appendChild(li);
  });
});
