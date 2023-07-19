const body = document.body;

const switcher = document.querySelector('.switcher');
switcher.addEventListener('click', switchTheme);

function switchTheme() {
  body.classList.toggle('day-mode');
}
