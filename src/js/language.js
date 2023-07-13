import { langArr } from './lang-arr';
const selectLanguage = document.querySelector('select[name="language"]');
const allLang = ['en', 'uk'];

selectLanguage.addEventListener('change', changeURLLanguage);

// redirect to another URL with chosen lang
function changeURLLanguage() {
  let lang = selectLanguage.value;

  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  selectLanguage.value = hash;
  document.querySelector('.navbar-link').innerHTML = langArr['home'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
