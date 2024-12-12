import './style.css'
import { initDiceRoller } from './components/DiceRoller';
import { initPrimeCalculator } from './components/PrimeCalculator';

document.addEventListener('DOMContentLoaded', async () => {
  const appDiv = document.getElementById('app') as HTMLElement;

  const diceRollerContainer = document.createElement('div');
  initDiceRoller(diceRollerContainer);
  appDiv.appendChild(diceRollerContainer);

  const primeCalculatorContainer = document.createElement('div');
  initPrimeCalculator(primeCalculatorContainer);
  appDiv.appendChild(primeCalculatorContainer);
});
