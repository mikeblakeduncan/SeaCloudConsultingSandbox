(function(){
  var track=document.getElementById('sc-track');if(!track)return;
  var cards=[].slice.call(track.children),
      dotsBox=document.getElementById('sc-dots'),
      count=document.getElementById('sc-count');
  if(!cards.length)return;
  // How many cards fit is a CSS decision, so read it back rather than assume.
  function gap(){return parseFloat(getComputedStyle(track).columnGap)||0;}
  function stride(){return track.clientWidth+gap();}
  function perView(){return Math.max(1,Math.round(stride()/(cards[0].offsetWidth+gap())));}
  function pages(){return Math.ceil(cards.length/perView());}
  function current(){return Math.min(pages()-1,Math.round(track.scrollLeft/stride()));}
  function goto(n){track.scrollTo({left:n*stride(),behavior:'smooth'});}
  function buildDots(){
    dotsBox.innerHTML='';
    for(var n=0;n<pages();n++){
      (function(n){
        var b=document.createElement('button');
        b.className='sc-dot';b.type='button';
        b.setAttribute('aria-label','Show engagements '+(n+1));
        b.addEventListener('click',function(){goto(n);});
        dotsBox.appendChild(b);
      })(n);
    }
  }
  function render(){
    var i=current(),ds=dotsBox.children;
    for(var n=0;n<ds.length;n++)ds[n].classList.toggle('is-active',n===i);
    if(count)count.textContent=(i+1)+' / '+ds.length;
  }
  document.getElementById('sc-next').addEventListener('click',function(){
    goto(current()>=pages()-1?0:current()+1);});
  document.getElementById('sc-prev').addEventListener('click',function(){
    goto(current()<=0?pages()-1:current()-1);});
  var t;track.addEventListener('scroll',function(){clearTimeout(t);t=setTimeout(render,90);},{passive:true});
  window.addEventListener('resize',function(){buildDots();render();});
  buildDots();render();
})();