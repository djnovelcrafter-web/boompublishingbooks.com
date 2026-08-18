/* ============================================================
   Shared book catalogue + render helpers.
   Pen names follow the author's consolidated brand table:
     Vesper Locke = sci-fi · Eveline Cross = portal fantasy · Mira Lavelle = romance
   (Cover art carries the correct pen name.)
   Each page sets window.ASSET_PREFIX ('' at root, '../' one level deep)
   before loading this file so relative paths resolve.
   ============================================================ */
(function(){
  var P = window.ASSET_PREFIX || '';

  window.BOOKS = [
    {
      slug:'the-opponent', title:'The Opponent', sub:'Book One',
      pen:'Vesper Locke', world:'vesper', genre:'Science Fiction · Space Opera', status:'soon', release:'Dec 2026',
      hook:'The Commonwealth’s perfect athlete discovers the Games celebrating his excellence are camouflage for genocide — and turns sport into rebellion.',
      cover:{img:'the-opponent.png'},
      link:'books/the-opponent/index.html'
    },
    {
      slug:'the-code-we-write-in-fire', title:'The Code We Write in Fire', sub:'Book One',
      pen:'Vesper Locke', world:'vesper', genre:'Science Fiction · Literary', status:'live', launch:'Releases August 13, 2026', rot:1,
      hook:'She deleted feeling from an entire city — then a poem the system can’t erase begins broadcasting the voice of the lover she condemned.',
      cover:{img:'the-code-we-write-in-fire.png'},
      link:'books/the-code-we-write-in-fire/index.html',
      buy:'https://shop.boompublishingbooks.com/products/the-code-we-write-in-fire',
      amazon:'https://www.amazon.com/dp/B0H9V6FGSF'
    },
    {
      slug:'the-bridge-walker', title:'The Accidental Nexus', sub:'Book One of The Bridge-Walker Trilogy',
      pen:'Eveline Cross', world:'eveline', genre:'Portal Fantasy', status:'live', release:'August 20, 2026', launch:'Coming August 20, 2026', feature:true, rot:3,
      hook:'A college student becomes a living gateway between worlds, and every door she opens costs her another piece of her memory.',
      cover:{img:'accidental-nexus.png'},
      link:'books/the-accidental-nexus/index.html',
      buy:'https://shop.boompublishingbooks.com/products/the-accidental-nexus?variant=47657116434581',
      amazon:'https://www.amazon.com/dp/B0H8XW34S2'
    },
    {
      slug:'the-mirage-queen', title:'The Mirage Queen', sub:'Book Two of The Bridge-Walker Trilogy',
      pen:'Eveline Cross', world:'eveline', genre:'Portal Fantasy', status:'soon', release:'October 2026', launch:'Coming October 2026',
      hook:'Awakened as the living Nexus and treated like a bomb that has not gone off, Lina is offered the one thing no one else will give her — relief — and crowns herself the Mirage Queen to become uncageable. The rescue her family is racing to attempt is exactly what the enemy planned.',
      cover:{img:'the-mirage-queen-cover.webp'},
      link:'books/the-mirage-queen/index.html'
    },
    {
      slug:'the-living-blade', title:'The Living Blade', sub:'A standalone novel',
      pen:'Eveline Cross', world:'eveline', genre:'Dark Romantic Fantasy', status:'soon', release:'Mar 2027',
      hook:'A desperate priestess summons a god forged for war in the shape of a man, and learns too late that loving him is the one thing that can unmake him.',
      cover:{img:'the-living-blade.png'},
      link:'books/the-living-blade/index.html'
    },
    {
      slug:'when-i-see-through-you', title:'When I See Through You', sub:'A novel',
      pen:'Mira Lavelle', world:'mira', genre:'WWII Historical Romance', status:'live', launch:'Releases August 15, 2026', rot:2,
      hook:'A bright Georgia belle, the quiet boy who is the only one to truly see her, and half of a jade heirloom that remembers more than anyone alive — a sweeping, slow-burn WWII love story about how far the heart will travel to find its way home.',
      cover:{img:'when-i-see-through-you.png'},
      link:'books/when-i-see-through-you/index.html',
      buy:'https://shop.boompublishingbooks.com/products/when-i-see-through-you',
      amazon:'https://www.amazon.com/dp/B0H9X82MSN',
      preview:'https://storyoriginapp.com/giveaways/019f8749-db63-75a8-9cf1-88dfc85b53f5?bundleId=019f139b-6873-7deb-869c-a40a1d1c0d2f&bundleLinkId=2FtlBm5'
    },
    {
      slug:'this-version-of-us', title:'This Version of Us', sub:'A novel',
      pen:'Mira Lavelle', world:'mira', genre:'Contemporary Romance · Magical Realism', status:'soon', release:'Sept 2026', feature:true, rot:4,
      hook:'Two doctoral students bound by visions of a shared life must learn that being known is not the same as being loved.',
      cover:{img:'this-version-of-us.png'},
      link:'books/this-version-of-us/index.html'
    },
    {
      slug:'ink-and-inheritance', title:'The Empress of Ink', sub:'The Empress of Ink · Book One',
      pen:'Mira Lavelle', world:'mira', genre:'Gothic Romantic Suspense', status:'soon', release:'Dec 2026',
      hook:'A rare-book empress authenticates a lost library and finds a forgery built for her hands alone — and 1886 letters that seem to know things she has never told anyone.',
      cover:{img:'ink-and-inheritance.png'},
      link:'books/the-empress-of-ink/index.html'
    },
    {
      slug:'the-widows-ledger', title:'The Widow’s Ledger', sub:'The Empress of Ink · Book Two',
      pen:'Mira Lavelle', world:'mira', genre:'Gothic Romantic Suspense', status:'soon', release:'Jul 2027',
      hook:'A packet of forged Victorian papers surfaces beneath a widow’s winter rose — and the truth it was buried to hide could destroy the very women it was meant to protect.',
      cover:{img:'the-widows-ledger.png'},
      link:'books/the-widows-ledger/index.html'
    },
    {
      slug:'no-ones-girl', title:'No One’s Girl', sub:'A novel',
      pen:'Mira Lavelle', world:'mira', genre:'Medical Gothic Romance · Dual Timeline', status:'soon', release:'2028',
      hook:'The world’s best heart surgeon hides a secret: her impossible genius was charted across her body twenty-five years ago — by the man now dying on her operating table.',
      cover:{img:'no-ones-girl.png'},
      link:'books/no-ones-girl/index.html'
    },
    {
      slug:'a-poem-until-the-end-of-time', title:'A Poem Until the End of Time',
      sub:'A short story', pen:'Vesper Locke', world:'vesper',
      genre:'Science Fiction', format:'short', readTime:'20 minutes',
      status:'soon', release:'Sept 3, 2026',
      hook:'An obsolete machine with a memory too small to hold everything deletes four thousand of his own poems to remember an old man’s wife’s name — and centuries later, something at the edge of the universe is still waiting.',
      cover:{img:'a-poem-until-the-end-of-time.jpg'},
      link:'books/a-poem-until-the-end-of-time/index.html'
    },
    {
      slug:'the-color-of-her-dress', title:'The Color of Her Dress',
      sub:'A ghost story', pen:'Mira Lavelle', world:'mira',
      genre:'Gothic Romance', format:'short', readTime:'15 minutes',
      status:'soon', release:'Sept 10, 2026',
      hook:'Four days after he says the worst thing he has ever said to her, she is dead — and sitting in the back pew of an empty church, in a red dress only he can see.',
      cover:{img:'the-color-of-her-dress.jpg'},
      link:'books/the-color-of-her-dress/index.html'
    },
    {
      slug:'the-five-day-forecast', title:'The Five Day Forecast',
      sub:'A novella', pen:'Eveline Cross', world:'eveline',
      genre:'Romantic Fantasy', format:'novella', readTime:'2½ hours',
      status:'soon', release:'Oct 1, 2026',
      hook:'Thrown out with five shillings, a failed son spends every coin on a fortune-teller who tells him he will be poisoned and dead in five days — and everyone in the kingdom spends those five days making her right.',
      cover:{img:'the-five-day-forecast.jpg'},
      link:'books/the-five-day-forecast/index.html'
    }
  ];

  window.WORLDS = {
    vesper:{name:'Vesper Locke', genre:'Science Fiction · Space Opera', page:'worlds/vesper-locke.html'},
    eveline:{name:'Eveline Cross', genre:'Fantasy · Adventure · Romantasy', page:'worlds/eveline-cross.html'},
    mira:{name:'Mira Lavelle', genre:'Historical Romance · Magical Realism · Gothic Romance', page:'worlds/mira-lavelle.html'}
  };

  window.coverHTML = function(b){
    if(b.cover.img){
      return '<img src="'+P+'covers/'+b.cover.img+'" alt="'+b.title+' cover" loading="lazy">';
    }
    var c=b.cover.css;
    return '<div class="csscover '+c.cls+'">'
      +'<div class="cp">'+esc(b.pen)+'</div>'
      +'<div><div class="ct">'+esc(c.t)+'</div><div class="cl"></div><div class="cg">'+esc(c.g)+'</div></div>'
      +'<div class="cp">'+esc(b.sub)+'</div></div>';
  };

  function esc(s){return (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

  function readLabel(s){
    return 'A '+s.replace(' minutes','-minute').replace(' hours','-hour')+' read';
  }

  var STATUS={live:'Available',soon:'Coming soon',vote:'Help me choose'};

  function href(u){return /^https?:\/\//.test(u||'')?u:P+u;}

  function style(){
    if(document.getElementById('book-action-styles')) return;
    var s=document.createElement('style');
    s.id='book-action-styles';
    s.textContent='.tile{display:flex;flex-direction:column}.tile>a{color:inherit;text-decoration:none}.book-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.book-btn{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:8px 11px;border:1px solid var(--line);border-radius:999px;color:var(--ink);text-decoration:none;font:700 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.06em;text-transform:uppercase;background:color-mix(in srgb,var(--panel) 75%,transparent)}.book-btn-primary{background:var(--gold);color:var(--bg);border-color:var(--gold)}.book-btn.is-disabled{opacity:.55;cursor:not-allowed;pointer-events:none;border-style:dashed}.book-btn-primary.is-disabled{background:color-mix(in srgb,var(--gold) 16%,transparent);color:var(--muted)}.shelf-group{margin-top:28px}.shelf-group-title{font-family:var(--sans);color:var(--gold);text-transform:uppercase;letter-spacing:.14em;border-bottom:1px solid var(--line);padding-bottom:8px;margin:0 0 18px}.shelf.short-reads{grid-template-columns:repeat(auto-fit,minmax(160px,182px));justify-content:start}@media(max-width:760px){.shelf.short-reads{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}}';
    document.head.appendChild(s);
  }

  function actions(b){
    if(b.status!=='live'&&!b.amazonSoon&&!b.directSoon) return '';
    var h='<div class="book-actions">';
    if(b.buy) h+='<a class="book-btn book-btn-primary" href="'+href(b.buy)+'" target="_blank" rel="noopener noreferrer">Buy from Boom Publishing Books</a>';
    if(b.directSoon) h+='<span class="book-btn book-btn-primary is-disabled" aria-disabled="true">Direct Paperback Coming Soon</span>';
    if(b.amazon) h+='<a class="book-btn" href="'+href(b.amazon)+'" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>';
    if(b.amazonSoon) h+='<span class="book-btn is-disabled" aria-disabled="true">Amazon Pre-order Coming Soon</span>';
    h+='<a class="book-btn" href="'+href(b.sample||b.link)+'">Read Chapter One</a>';
    if(b.preview) h+='<a class="book-btn" href="'+href(b.preview)+'" target="_blank" rel="noopener noreferrer" aria-label="Read the first three chapters of When I See Through You free">📖 Read the First 3 Chapters FREE</a>';
    h+='</div>';
    return h;
  }

  window.tileHTML = function(b){
    style();
    return '<div class="tile" data-slug="'+b.slug+'" data-world="'+b.world+'" data-status="'+b.status+'"><a href="'+P+b.link+'">'
      +'<div class="tilecover"><span class="badge '+b.status+'">'+(b.launch?esc(b.launch):STATUS[b.status]+(b.release?' · '+esc(b.release):''))+'</span>'+window.coverHTML(b)+'</div>'
      +'<div class="tilecap"><div class="t">'+esc(b.title)+'</div><div class="p">'+esc(b.pen)+' · '+esc(b.genre)+'</div>'+(b.readTime?'<span class="meta-pill">'+esc(readLabel(b.readTime))+'</span>':'')+(b.free?'<span class="meta-pill free">Free</span>':'')+(b.stage?'<div class="p" style="font-size:11px;opacity:.65;margin-top:3px">'+esc(b.stage)+'</div>':'')+'</div></a>'+actions(b)+'</div>';
  };

  /* ---- shelf with optional filter chips ---- */
  window.renderShelf = function(sel, opts){
    opts=opts||{};
    var host=document.querySelector(sel); if(!host) return;
    var list=window.BOOKS.filter(opts.filter||function(){return true;});
    var chipsHTML='';
    if(opts.chips){
      var sets=[['all','All']].concat(
        [['vesper','Sci-Fi'],['eveline','Fantasy'],['mira','Romance']],
        [['live','Available'],['soon','Coming soon']]);
      chipsHTML='<div class="chips">'+sets.map(function(s,i){
        return '<button class="chip'+(i===0?' on':'')+'" data-f="'+s[0]+'">'+s[1]+'</button>';}).join('')+'</div>';
    }
    function group(title, items, cls){
      return items.length?'<div class="shelf-group"><h3 class="shelf-group-title">'+title+'</h3><div class="shelf '+cls+'">'+items.map(window.tileHTML).join('')+'</div></div>':'';
    }
    var novels=list.filter(function(b){return (b.format||'novel')==='novel';});
    var shorts=list.filter(function(b){return b.format==='novella'||b.format==='short';});
    host.innerHTML=chipsHTML+group('Novels',novels,'novels')+group('Short Reads',shorts,'short-reads');
    if(opts.chips){
      host.querySelectorAll('.chip').forEach(function(ch){
        ch.addEventListener('click',function(){
          host.querySelectorAll('.chip').forEach(function(c){c.classList.remove('on');});
          ch.classList.add('on');
          var f=ch.dataset.f;
          host.querySelectorAll('.tile').forEach(function(t){
            var show = f==='all' || t.dataset.world===f || t.dataset.status===f;
            t.style.display=show?'':'none';
          });
          host.querySelectorAll('.shelf-group').forEach(function(g){
            g.style.display=Array.prototype.some.call(g.querySelectorAll('.tile'),function(t){return t.style.display!=='none';})?'':'none';
          });
        });
      });
    }
  };

  /* ---- rotating hero ---- */
  window.initRotation = function(sel, opts){
    opts=opts||{};
    var host=document.querySelector(sel); if(!host) return;
    var list=window.BOOKS.filter(opts.filter||function(b){return b.status==='live'||b.feature;});list.sort(function(a,b){return (a.rot||99)-(b.rot||99);});
    var slides=list.map(function(b){
      return '<div class="slide" data-slug="'+b.slug+'" data-world="'+b.world+'">'
        +'<a class="rcover" href="'+P+b.link+'">'+window.coverHTML(b)+'</a>'
        +'<div class="rmeta">'
          +'<p class="reyebrow">'+esc(b.genre)+'</p>'
          +(b.readTime?'<p class="meta-pill">'+esc(readLabel(b.readTime))+'</p>':'')
          +(b.free?'<p class="meta-pill free">Free</p>':'')
          +(b.launch?'<p class="meta-pill free">'+esc(b.launch)+'</p>':b.status!=='live'?'<p class="meta-pill free">Coming soon'+(b.release?' &#183; '+esc(b.release):'')+'</p>':'')
          +'<h1 class="rtitle">'+esc(b.title)+'</h1>'
          +'<div class="rsub">'+esc(b.sub)+'</div>'
          +'<p class="rhook">'+esc(b.hook)+'</p>'
          +'<p class="rpen">'+({novel:'a novel by ',novella:'a novella by ',short:'a short story by '}[b.format||'novel'])+esc(b.pen)+'</p>'
          +'<div class="rcta"><a class="btn primary" href="'+P+b.link+'">'+(b.free?'Read it free':'Enter this book')+'</a>'
            +(b.buy?'<a class="btn ghost" href="'+href(b.buy)+'" target="_blank" rel="noopener noreferrer">Buy from Boom Publishing Books</a>':'')
            +(b.directSoon?'<span class="btn primary is-disabled" aria-disabled="true">Direct Paperback Coming Soon</span>':'')
            +(b.amazon?'<a class="btn ghost" href="'+href(b.amazon)+'" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>':'')
            +(b.amazonSoon?'<span class="btn ghost is-disabled" aria-disabled="true">Amazon Pre-order Coming Soon</span>':'')
            +(b.preview?'<a class="btn ghost" href="'+href(b.preview)+'" target="_blank" rel="noopener noreferrer" aria-label="Read the first three chapters of When I See Through You free">📖 Read the First 3 Chapters FREE</a>':'')
          +'</div>'
        +'</div></div>';
    }).join('');
    host.innerHTML='<div class="hero"><div class="stars"></div><div class="rstage" id="rstage">'+slides+'</div></div>'
      +'<div class="rctrls"><button class="rarrow" id="rprev" aria-label="Previous">‹</button>'
      +'<div class="rdots" id="rdots"></div>'
      +'<button class="rarrow" id="rnext" aria-label="Next">›</button></div>';
    var stage=host.querySelector('#rstage');
    var dotsHost=host.querySelector('#rdots');
    var els=stage.querySelectorAll('.slide');
    var i=0,timer=null;
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    dotsHost.innerHTML=list.map(function(_,k){return '<button class="rdot" data-k="'+k+'"></button>';}).join('');
    var dots=dotsHost.querySelectorAll('.rdot');
    function show(n){
      i=(n+els.length)%els.length;
      els.forEach(function(e,k){e.classList.toggle('on',k===i);});
      dots.forEach(function(d,k){d.classList.toggle('on',k===i);});
      var w=els[i].getAttribute('data-world');
      host.querySelector('.hero').className='hero world-'+w;
    }
    function next(){show(i+1);} function prev(){show(i-1);}
    function play(){ if(reduce) return; stop(); timer=setInterval(next, opts.interval||6000); }
    function stop(){ if(timer){clearInterval(timer);timer=null;} }
    host.querySelector('#rnext').addEventListener('click',function(){next();play();});
    host.querySelector('#rprev').addEventListener('click',function(){prev();play();});
    dots.forEach(function(d){d.addEventListener('click',function(){show(+d.dataset.k);play();});});
    host.addEventListener('mouseenter',stop); host.addEventListener('mouseleave',play);
    show(0); play();
  };
})();
