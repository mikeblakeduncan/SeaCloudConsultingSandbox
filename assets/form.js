(function(){
  var f=document.getElementById('sc-form');if(!f)return;
  var btn=document.getElementById('sc-send'),err=document.getElementById('sc-error'),
      ok=document.getElementById('sc-thanks');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    err.style.display='none';
    btn.disabled=true;btn.textContent='Sending...';btn.style.opacity='.7';
    fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
      .then(function(r){
        if(r.ok){f.style.display='none';ok.style.display='block';ok.scrollIntoView({block:'center'});return;}
        return r.json().then(function(d){
          throw new Error((d.errors&&d.errors.map(function(x){return x.message}).join(', '))||'Something went wrong.');
        });
      })
      .catch(function(ex){
        err.textContent=ex.message.replace(/\.?$/,'.')+' You can also email mike@seacloudconsulting.com.';
        err.style.display='block';
        btn.disabled=false;btn.textContent='Send';btn.style.opacity='1';
      });
  });
})();