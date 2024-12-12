import { calculatePrimes } from '../modules/PrimeNumber';

export function initPrimeCalculator(container:HTMLElement) {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Entrez un nombre';

  const button = document.createElement('button');
  button.textContent = 'Calculer les nombres premiers';
  button.addEventListener('click', () => {
    const limit = parseInt(input.value, 10);
    if (!isNaN(limit)) {
      const primes = calculatePrimes(limit);
      container.innerHTML = `<div class="result">Nombres premiers jusqu'à ${limit} : ${primes.join(', ')}</div>`;
    } else {
      container.innerHTML = '<div class="result">Veuillez entrer un nombre valide.</div>';
    }
  });

  container.appendChild(input);
  container.appendChild(button);
}
