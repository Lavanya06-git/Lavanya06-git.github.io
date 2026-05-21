
window.addEventListener('scroll', function(){
const navbar = document.querySelector('.navbar');

if(window.scrollY > 50){
navbar.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
}else{
navbar.style.boxShadow = 'none';
}
});
