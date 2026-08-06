(function(){
  var label='Join Mira Lavelle’s Reader Community';
  var ariaLabel='Join Mira Lavelle’s reader community';

  function updateMiraSignup(){
    document.querySelectorAll('.ml-embedded[data-form="yENlHO"] button.primary[type="submit"]').forEach(function(button){
      if(button.textContent!==label) button.textContent=label;
      if(button.getAttribute('aria-label')!==ariaLabel) button.setAttribute('aria-label',ariaLabel);
    });
  }

  updateMiraSignup();
  new MutationObserver(updateMiraSignup).observe(document.body,{childList:true,subtree:true});
})();
