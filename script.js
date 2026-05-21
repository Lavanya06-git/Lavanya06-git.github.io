
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 20){
    nav.style.background = '#ffffffee';
  } else {
    nav.style.background = '#ffffff';
  }
});
