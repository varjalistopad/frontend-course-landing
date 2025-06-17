document.getElementById('signupBtn').addEventListener('click', function () {
  document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('modal').classList.remove('hidden');
  this.reset();
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').classList.add('hidden');
});
