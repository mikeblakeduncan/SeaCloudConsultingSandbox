(function(){
  var track=document.getElementById('sc-track');if(!track)return;
  var cards=track.children,dots=[].slice.call(document.querySelectorAll('.sc-dot')),
      count=document.getElementById('sc-count'),i=0,sx=0;
  function render(){track.style.transform='translateX(-'+(i*100)+'%)';
    dots.forEach(function(d,n){d.style.background=n===i?'var(--ink)':'var(--line)';});
    if(count)count.textContent=(i+1)+' / '+cards.length;}
  function go(n){i=(n+cards.length)%cards.length;render();}
  document.getElementById('sc-next').addEventListener('click',function(){go(i+1);});
  document.getElementById('sc-prev').addEventListener('click',function(){go(i-1);});
  dots.forEach(function(d){d.addEventListener('click',function(){go(+d.dataset.i);});});
  track.addEventListener('touchstart',function(e){sx=e.changedTouches[0].screenX;},{passive:true});
  track.addEventListener('touchend',function(e){var dx=sx-e.changedTouches[0].screenX;
    if(dx>50)go(i+1);else if(dx<-50)go(i-1);},{passive:true});
  render();
})();