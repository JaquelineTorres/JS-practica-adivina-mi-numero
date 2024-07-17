import './style.css'

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//console.log(numbers);
document.getElementById("start-game").addEventListener('click', () => {

  let guess;

  let left = 0;
  let right = numbers.length - 1;

  const guessNumber = () => {
    while (left <= right) {
      guess = Math.floor((left + right) / 2);
      let userResponse = confirm(`¿Es este tu número: ${guess}?`);

      if (userResponse) {
        document.getElementById('game-container').innerHTML = `<h2>Tu número es el ${guess}, excelente decisión</h2>`;
        return;
      } else {
        let higherOrLower = confirm('¿Tu número es mayor que este?');
        if (higherOrLower) {
          left = guess + 1;
        } else {
          right = guess - 1;
        }
      }
    }
  };

  guessNumber();
});
