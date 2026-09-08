document.addEventListener('DOMContentLoaded', function(){
  var carousel = document.querySelector('.hero-carousel');
  if(!carousel) return;

  var slides = carousel.querySelectorAll('.carousel-slide');
  var prev = carousel.querySelector('.carousel-prev');
  var next = carousel.querySelector('.carousel-next');
  var idx = 0;

  function show(i){
    slides[idx].classList.remove('active');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
  }

  prev.addEventListener('click', function(){ show(idx - 1); });
  next.addEventListener('click', function(){ show(idx + 1); });
});
