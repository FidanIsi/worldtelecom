const language = document.querySelector('.lang')
const links = document.querySelectorAll('a')
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const content5 = document.querySelector('.content5')
const content6 = document.querySelector('.content6')
const content7 = document.querySelector('.content7')
const active = document.querySelector('.active')

const text = {
  "az":
    {
        "content1": "Hədiyyə kartları",
        "content2": "Birbank kartı əldə edin",
        "content3": "Korporativ satışlar",
        "content4": "Mağazalarımız",
        "input": "Axtardığınız məhsulu yazın",
        "button": "KAMPANİYALAR",
        "content5": "SEVİMLİLƏRİM",
        "content6": "SƏBƏTİM",
        "content7": "HESABIM"
    },
    "ru":
    {
        "content1": "Подарочные карты",
        "content2": "Получить банковскую карту",
        "content3": "Корпоративные продажи",
        "content4": "Магазины",
        "input": "Введите продукт, который вы ищете",
        "button": "АКЦИИ",
        "content5": "ИЗБРАННОЕ",
        "content6": "КОРЗИНА",
        "content7": "МОЙ СЧЕТ"
    }
}

function setLanguage(lang) {
  content1.textContent = text[lang].content1;
  content2.textContent = text[lang].content2;
  content3.textContent = text[lang].content3;
  content4.textContent = text[lang].content4;
  input.placeholder = text[lang].input;
  button.textContent = text[lang].button;
  content5.textContent = text[lang].content5;
  content6.textContent = text[lang].content6;
  content7.textContent = text[lang].content7;
}

function toggleLanguage(language) {
  localStorage.setItem('selected_language', language);
  setLanguage(language);

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('language') === language) {
      link.classList.add('active');
    }
  });
}

const storedLanguage = localStorage.getItem('selected_language');
if (storedLanguage) {
  toggleLanguage(storedLanguage);
}

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const language = link.getAttribute('language');
    toggleLanguage(language);
  });
});
