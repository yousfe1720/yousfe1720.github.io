(function(){
  var boot=document.querySelector('.boot');
  if(boot){
    if(sessionStorage.getItem('yi-boot-complete')) boot.remove();
    else setTimeout(function(){sessionStorage.setItem('yi-boot-complete','true');boot.classList.add('hide');setTimeout(function(){boot.remove()},260)},1320);
  }
  var nav=document.querySelector('.nav-wrap');
  var menu=document.querySelector('.menu-btn');
  var navInner=document.querySelector('.nav');
  function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY>24); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  if(menu&&navInner){menu.addEventListener('click',function(){var open=navInner.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});}
  document.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){if(navInner)navInner.classList.remove('open');if(menu)menu.setAttribute('aria-expanded','false');});});
  var robot=document.querySelector('.robot');
  if(robot){document.addEventListener('mousemove',function(e){
    if(window.matchMedia('(max-width: 980px)').matches) return;
    var x=(e.clientX/window.innerWidth-.5)*4;
    var y=(e.clientY/window.innerHeight-.5)*-2;
    robot.style.transform='rotateY('+x+'deg) rotateX('+y+'deg)';
  },{passive:true});}
  var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){
    if(entry.isIntersecting){entry.target.classList.add('show');}
  })},{threshold:.12});
  document.querySelectorAll('.reveal,.metric,.domain,.role,.skill-card,.data-visual').forEach(function(el){io.observe(el);});
})();
