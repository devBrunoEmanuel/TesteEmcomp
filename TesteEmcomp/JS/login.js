const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin123';

function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === adminEmail && password === adminPassword) {
    const currentEmail = { email, isAdmin: true };
    localStorage.setItem('email', JSON.stringify(currentEmail));
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'cadastro.html';
  } else {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      const currentEmail = { email, isAdmin: false };
      localStorage.setItem('email', JSON.stringify(currentEmail));
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html';
    } else {
      alert('Usuário ou senha inválida');
    }
  }
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', login);
