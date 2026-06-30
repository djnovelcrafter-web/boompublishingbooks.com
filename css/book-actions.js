(function(){
  var P = window.ASSET_PREFIX || '';
  var SHOP_URL = 'https://shop.boompublishingbooks.com/products/the-code-we-write-in-fire';

  function href(url){ return /^https?:\/\//.test(url || '') ? url : P + url; }
  function esc(s){ return (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function addStyles(){
    if(document.getElementById('book-action-styles')) return;
    var css = '.tile{display:flex;flex-direction:column}.tilecap{display:flex;flex-direction:column;gap:4px}.book-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.book-btn{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:8px 11px;border:1px solid rgba(217,180,106,.45);border-radius:999px;color:#f2dfad;text-decoration:none;font:700 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.06em;text-transform:uppercase;background:rgba(0,0,0,.14)}.book-btn:hover{border-color:#d9b46a;background:rgba(217,180,106,.12)}.book-btn-primary{background:#d9b46a;color:#160f09;border-color:#d9b46a}.book-btn-primary:hover{background:#f0ca7c;color:#160f09}.tile>a{color:inherit;text-decoration:none}';
    var style = document.createElement('style');
    style.id = 'book-action-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function actionsFor(b){
    if(!b || b.status !== 'live') return '';
    var html = '<div class="book-actions">';
    if(b.slug === 'the-code-we-write-in-fire'){
      html += '<a class="book-btn book-btn-primary" href="'+SHOP_URL+'">Buy from Publisher</a>';
      html += '<a class="book-btn" href="'+href('books/the-code-we-write-in-fire/index.html#sample')+'">Read Sample</a>';
    } else {
      html += '<a class="book-btn" href="'+href(b.link)+'">Read Sample</a>';
    }
    html += '</div>';
    return html;
  }

  if(!window.BOOKS || !window.tileHTML) return;
  var originalCover = window.coverHTML;
  var STATUS = {live:'Available', soon:'Coming soon', vote:'Help me choose'};
  window.tileHTML = function(b){
    addStyles();
    return '<div class="tile" data-world="'+b.world+'" data-status="'+b.status+'">'
      +'<a href="'+P+b.link+'">'
      +'<div class="tilecover"><span class="badge '+b.status+'">'+STATUS[b.status]+(b.release?' · '+esc(b.release):'')+'</span>'+originalCover(b)+'</div>'
      +'<div class="tilecap"><div class="t">'+esc(b.title)+'</div><div class="p">'+esc(b.pen)+' · '+esc(b.genre)+'</div>'+(b.stage?'<div class="p" style="font-size:11px;opacity:.65;margin-top:3px">'+esc(b.stage)+'</div>':'')+'</div></a>'+actionsFor(b)+'</div>';
  };
})();