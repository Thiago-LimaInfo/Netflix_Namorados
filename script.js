const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

const nav = document.getElementById('nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 400){
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
})

openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Fechar ao clicar fora
  window.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });