
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');

  if(window.scrollY > 50){
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
