"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const loadBtn = document.getElementById("loadBtn");
const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const userDetails = document.getElementById("userDetails");

let users = []; // store users globally after fetch

// Load users
loadBtn.addEventListener("click", async () => {
  userList.innerHTML = "<li>Loading...</li>";
  userDetails.innerHTML = '<p class="muted">Select a user to see details.</p>';

  try {
    const response = await fetch(API_URL);
    users = await response.json();
    renderList(users);
  } catch (error) {
    userList.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
  }
});

// Render user list
function renderList(list) {
  userList.innerHTML = "";
  list.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    li.addEventListener("click", () => showDetails(user));
    userList.appendChild(li);
  });
}

// Search/filter
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(term));
  renderList(filtered);
});

// Show details
function showDetails(user) {
  userDetails.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    <p><strong>Company:</strong> ${user.company.name}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
  `;
}
