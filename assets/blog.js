(function(){
  var wrap = document.querySelector('[data-filters]');
  var list = document.querySelector('[data-postlist]');
  if(!wrap || !list) return;
  var rows = [].slice.call(list.querySelectorAll('.postrow'));
  var chips = [].slice.call(wrap.querySelectorAll('button[data-filter]'));
  wrap.addEventListener('click', function(e){
    var btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    var f = btn.getAttribute('data-filter');
    chips.forEach(function(c){
      var on = c === btn;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    rows.forEach(function(r){
      r.hidden = !!f && r.getAttribute('data-cat') !== f;
    });
  });
})();
