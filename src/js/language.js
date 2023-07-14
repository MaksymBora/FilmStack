import { langArr } from './lang-arr';
const selectLanguage = document.querySelector('select[name="language"]');
const allLang = ['en', 'uk'];

selectLanguage.addEventListener('change', changeURLLanguage);

// function changeURLLanguage() {
//   let lang = selectLanguage.value;
//   window.location.hash = lang;
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash.substr(1);

//   if (!allLang.includes(hash)) {
//     hash = 'en';
//     window.location.hash = hash;
//     location.reload();
//   }

//   selectLanguage.value = hash;
//   document.querySelector('.navbar-link').innerHTML = langArr['home'][hash];
//   for (let key in langArr) {
//     let elem = document.querySelector('.lng-' + key);
//     if (elem) {
//       elem.innerHTML = langArr[key][hash];
//     }
//   }
// }

// changeLanguage();

function changeURLLanguage() {
  let lang = selectLanguage.value;
  window.location.hash = lang;

  saveLanguageToLocalStorage(); // Call function to save lang in localStorage

  location.reload();
}

function applyLanguage(lang) {
  if (!allLang.includes(lang)) {
    lang = 'en';
    window.location.hash = lang;
  }

  selectLanguage.value = lang;
  document.querySelector('.navbar-link').innerHTML = langArr['home'][lang];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][lang];
    }
  }
}

function saveLanguageToLocalStorage() {
  let lang = selectLanguage.value;

  // Save schosen lang in localStorage
  localStorage.setItem('selectedLanguage', lang);
}

function getDefaultLanguage() {
  let savedLang = localStorage.getItem('selectedLanguage');

  if (!savedLang) {
    // If in localStorage lang is not saved, apply default lang 'en'
    localStorage.setItem('selectedLanguage', 'en');
    savedLang = 'en';
  }

  return savedLang;
}

// In another HTML file getting saved lang from localStorage and applying it
function applySavedLanguage() {
  let savedLang = getDefaultLanguage();

  applyLanguage(savedLang); // Apply chosen lang to current page
}

applySavedLanguage();
