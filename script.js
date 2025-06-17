document.getElementById('signupBtn').addEventListener('click', function () {
  document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('formError');
  errorEl.textContent = '';

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
