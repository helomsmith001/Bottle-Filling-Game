document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const startBtn = document.getElementById('start-game');
  const resetBtn = document.getElementById('reset-game');
  const applyNameBtn = document.getElementById('apply-name');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const scoreDisplay = document.getElementById('score');
  const levelDisplay = document.getElementById('level');
  const gameNameInput = document.getElementById('game-name');
  const gameTitle = document.getElementById('game-title');

  canvas.width = 800;
  canvas.height = 400;

  let score = 0;
  let level = 1;
  let isDarkTheme = false;

  function drawBottle() {
    ctx.fillStyle = '#007bff';
    ctx.fillRect(200, 100, 100, 200);
  }

  function startGame() {
    score = 0;
    level = 1;
    scoreDisplay.textContent = `Score: ${score}`;
    levelDisplay.textContent = `Level: ${level}`;
    drawBottle();
  }

  function resetGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startGame();
  }

  function applyGameName() {
    const name = gameNameInput.value.trim();
    if (name) {
      gameTitle.textContent = name;
    }
  }

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#f0f0f0';
    document.body.style.color = isDarkTheme ? '#fff' : '#333';
  }

  function redirect() {
    window.open('https://example.com', '_blank');
  }

  setInterval(redirect, 15000);

  startBtn.addEventListener('click', startGame);
  resetBtn.addEventListener('click', resetGame);
  applyNameBtn.addEventListener('click', applyGameName);
  themeToggleBtn.addEventListener('click', toggleTheme);
});
