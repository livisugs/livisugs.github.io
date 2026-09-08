document.addEventListener('DOMContentLoaded', function(){
  var imgs = document.querySelectorAll('.scrap img, .carousel-slide');
  if(!imgs.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  var lbImg = document.createElement('img');
  lbImg.className = 'lightbox-img';
  overlay.appendChild(lbImg);
  document.body.appendChild(overlay);

  imgs.forEach(function(img){
    img.addEventListener('click', function(){
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });
});
