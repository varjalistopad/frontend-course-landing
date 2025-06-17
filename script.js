document.getElementById('signupBtn').addEventListener('click', function () {
  document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const login = document.getElementById('login').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('formError');
  errorEl.textContent = '';

  const loginRegex = /^[a-z0-9@.-]+$/;
  const hasUpperCase = /[A-Z]/.test(login);
  const hasSpaces = /\s/.test(login);

  const isEmail = login.includes('@') && login.includes('.');

  if (hasUpperCase) {
    errorEl.textContent = 'Login must not contain uppercase letters.';
    return;
  }
  if (hasSpaces) {
    errorEl.textContent = 'Login must not contain spaces.';
    return;
  }
  if (!loginRegex.test(login)) {
    errorEl.textContent = 'Login contains invalid characters.';
    return;
  }

  if (isEmail) {
    // additional email format validation
    const emailParts = login.split('@');
    if (emailParts.length !== 2 || emailParts[0].length === 0 || emailParts[1].length < 3 || !emailParts[1].includes('.')) {
      errorEl.textContent = 'Invalid email format.';
      return;
    }
  } else {
    // strict rules for usernames
    if (login.length > 10) {
      errorEl.textContent = 'Username must not exceed 10 characters.';
      return;
    }
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
