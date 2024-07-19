import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

let guess;
let left;
let right;

const guessNumber = () => {
  if (left <= right) {
    guess = Math.floor((left + right) / 2);
    document.getElementById('game-container').innerHTML = `
      <div class="text-center mt-3">
        <h2>¿Es este tu número: ${guess}?</h2>
        <button id="yes-button" class="btn btn-success m-2">Sí</button>
        <button id="no-button" class="btn btn-danger m-2">No</button>
      </div>
    `;

    document.getElementById('yes-button').addEventListener('click', () => {
      document.getElementById('game-container').innerHTML = `
        <h2 class="text-center mt-3">Tu número es el ${guess}, excelente decisión</h2>
        <button id="reset-game" class="btn btn-warning mt-3">Reiniciar Juego</button>
      `;
      document.getElementById('reset-game').addEventListener('click', resetGame);
    });

    document.getElementById('no-button').addEventListener('click', () => {
      document.getElementById('game-container').innerHTML = `
        <div class="text-center mt-3">
          <h2>¿Tu número es mayor que ${guess}?</h2>
          <button id="higher-button" class="btn btn-primary m-2">Sí</button>
          <button id="lower-button" class="btn btn-secondary m-2">No</button>
        </div>
      `;

      document.getElementById('higher-button').addEventListener('click', () => {
        left = guess + 1;
        guessNumber();
      });

      document.getElementById('lower-button').addEventListener('click', () => {
        right = guess - 1;
        guessNumber();
      });
    });
  }
};

const resetGame = () => {
  document.getElementById('game-container').innerHTML = `
    <div class="text-center mt-5">
      <h2>Haz clic en "Iniciar Juego" para empezar.</h2>
      <button id="start-game" class="btn btn-primary mt-3">Iniciar Juego</button>
    </div>
  `;

  document.getElementById('start-game').addEventListener('click', startGame);
};

const startGame = () => {
  left = 0;
  right = numbers.length - 1;
  guessNumber();
};

document.getElementById('start-game').addEventListener('click', startGame);