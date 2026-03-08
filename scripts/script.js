// Login functionality 
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector("button");

const demoUserName = "admin";
const demoPassword = "admin123";

loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === demoUserName && password === demoPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
});

// Page Navigation Toggle
const allFilterBtn = document.getElementById('all-filter-btn');
const openFilterBtn = document.getElementById('open-filter-btn');
const closedFilterBtn = document.getElementById('closed-filter-btn');
function toggleStyle(id) {

    allFilterBtn.classList.remove('btn-primary', 'text-white');
    openFilterBtn.classList.remove('btn-primary', 'text-white');
    closedFilterBtn.classList.remove('btn-primary', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('btn-primary', 'text-white');
}


