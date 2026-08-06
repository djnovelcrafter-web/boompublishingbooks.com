(function(){
  var label="Join Mira Lavelle's Reader Community";
  var ariaLabel="Join Mira Lavelle's reader community";
  var focusRequested=false;

  function focusMiraEmail(){
    var email=document.querySelector('.ml-embedded[data-form="yENlHO"] input[type="email"]');
    if(!email) return false;
    email.focus({preventScroll:true});
    return true;
  }

  function updateMiraSignup(){
    document.querySelectorAll('.ml-embedded[data-form="yENlHO"] button.primary[type="submit"]').forEach(function(button){
      if(button.textContent!==label) button.textContent=label;
      if(button.getAttribute('aria-label')!==ariaLabel) button.setAttribute('aria-label',ariaLabel);
    });
    if(focusRequested&&focusMiraEmail()) focusRequested=false;
  }

  document.addEventListener('click',function(event){
    var cta=event.target.closest('[data-mira-signup-cta]');
    if(!cta) return;
    var signup=document.querySelector('.ml-embedded[data-form="yENlHO"]')||document.querySelector('#newsletter');
    if(!signup) return;
    event.preventDefault();
    signup.scrollIntoView({behavior:'smooth',block:'center'});
    focusRequested=true;
    if(focusMiraEmail()) focusRequested=false;
  });

  updateMiraSignup();
  new MutationObserver(updateMiraSignup).observe(document.body,{childList:true,subtree:true});
})();
