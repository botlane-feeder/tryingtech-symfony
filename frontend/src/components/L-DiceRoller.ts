import { rollDice } from '../modules/RollDice';

export function initDiceRoller(container:HTMLElement) {
  const button = document.createElement('button');
  button.textContent = 'Jeter le dé';
  button.addEventListener('click', () => {
    const result = rollDice();
    container.innerHTML = `<div class="result">Résultat : ${result}</div>`;
  });
  container.appendChild(button);
}
