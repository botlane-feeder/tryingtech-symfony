export async function initDiceRoller(container:HTMLElement) {
  const button = document.createElement('button');
  button.textContent = 'Jeter le dé';
  button.addEventListener('click', async () => {
    const response = await fetch(`/api/roll-dice`);
    const data = await response.json();
    container.innerHTML = `<div class="result">Résultat : ${data.number}</div>`;
  });
  container.appendChild(button);
}
