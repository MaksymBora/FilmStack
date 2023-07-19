const Theme = {
  DAY: 'day-mode',
};

const bodyTheme = document.querySelector('body');

const themeSwitcher = document.querySelector('.switcher');

themeSwitcher.addEventListener('change', () => {
  if (themeSwitcher.checked) {
    localStorage.setItem('Theme', 'day-mode');
    bodyTheme.classList.add(Theme.DAY);
  } else {
    localStorage.setItem('Theme', 'night-mode');
    bodyTheme.classList.remove(Theme.DAY);
  }
});

if (localStorage.getItem('Theme') === 'day-mode') {
  themeSwitcher.setAttribute('checked', true);
  bodyTheme.classList.add(Theme.DAY);
  footerTheme.classList.add(Theme.DAY);
}
