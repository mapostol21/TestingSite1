// 1. Pune anul curent în footer automat
document.getElementById('an').textContent = new Date().getFullYear();

// 2. Butonul de temă deschisă/închisă
const buton = document.getElementById('tema');

buton.addEventListener('click', () => {
  document.body.classList.toggle('întunecat');
  const eÎntunecat = document.body.classList.contains('întunecat');
  buton.textContent = eÎntunecat ? '☀️' : '🌙';
});
