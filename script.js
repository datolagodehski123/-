// script.js
// Переключение вкладок
document.querySelectorAll('.navbar .tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.navbar .tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

// Простейшая проверка теста (пример для первых 5 вопросов)
document.getElementById('submit-quiz').onclick = function() {
  const answers = {
    q1: 'a',
    q2: 'a',
    q3: 'a',
    q4: 'a',
    q5: 'a'
    // ... добавьте остальные правильные ответы до 30
  };
  let score = 0;
  let total = Object.keys(answers).length;
  for (let q in answers) {
    let checked = document.querySelector(`input[name="${q}"]:checked`);
    if (checked && checked.value === answers[q]) score++;
  }
  document.getElementById('quiz-result').textContent = `Ваш результат: ${score} из ${total}`;
};

