document.getElementById('signupBtn').addEventListener('click', function () {
  document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('formError');
  errorEl.textContent = '';

  const emailRegex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (email !== email.toLowerCase()) {
    errorEl.textContent = 'Email must not contain uppercase letters.';
    return;
  }

  if (/\s/.test(email)) {
    errorEl.textContent = 'Email must not contain spaces.';
    return;
  }

  if (!emailRegex.test(email)) {
    errorEl.textContent = 'Email format is invalid.';
    return;
  }

  if (password.length < 8) {
    errorEl.textContent = 'Password must be at least 8 characters.';
    return;
  }

  if (!/[0-9]/.test(password)) {
    errorEl.textContent = 'Password must include at least one digit.';
    return;
  }

  if (!/[a-zA-Z]/.test(password)) {
    errorEl.textContent = 'Password must include at least one letter.';
    return;
  }

  document.getElementById('modal').classList.remove('hidden');
  e.target.reset();
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').classList.add('hidden');
});

// Показать/скрыть пароль
const passwordInput = document.getElementById('password');
const eyeIcon = document.createElement('span');
eyeIcon.innerHTML = '👁';
eyeIcon.className = 'toggle-password';

eyeIcon.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = '🙈';
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = '👁';
  }
});

document.querySelector('.password-wrapper').appendChild(eyeIcon);
