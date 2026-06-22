# -*- coding: utf-8 -*-
"""Generate consistent book-page stubs for books not yet fully ported to the template."""
import os
BASE = r"C:\Prep_Folder_Claude\Author_Website\books"

BOOKS = [
 dict(slug="the-code-we-write-in-fire", title="The Code We Write in Fire", world="vesper",
      pen="Vesper Locke", genre="Science Fiction", sub="Book One", status="Available now",
      cover_img="the-code-we-write-in-fire.jpg",
      hook="In a world that engineered feeling out of code, one woman learns to burn — and feeling becomes the most dangerous program of all.",
      note="Feel. Risk. Burn. Become."),
 dict(slug="the-bridge-walker", title="The Bridge-Walker", world="eveline",
      pen="Eveline Cross", genre="Portal Fantasy", sub="Book One", status="Available now",
      cover_img="the-bridge-walker.jpg",
      hook="Three teenagers find a covered bridge that opens onto other worlds — and a destiny that chose them before they were born.",
      note="Book One of a trilogy. Book Two is nearly finished; Book Three is on the way."),
 dict(slug="ink-and-inheritance", title="Ink &amp; Inheritance", world="mira",
      pen="Mira Lavelle", genre="Gothic Romantic Suspense", sub="Ravenstone · Book One", status="Available now",
      cover_img="ink-and-inheritance.png",
      hook="A rare-book empress authenticates a lost library and finds a forgery built for her hands — and letters proving she has lived this story before.",
      note="A dual-timeline gothic romance with series potential."),
 dict(slug="this-version-of-us", title="This Version of Us", world="mira",
      pen="Mira Lavelle", genre="Contemporary Romance", sub="A novel", status="Available now",
      cover_img="this-version-of-us.svg",
      hook="Two people keep finding each other across the versions of a life they almost lived.",
      note="A standalone love story about timing, choice, and the lives we don't take."),
 dict(slug="no-ones-girl", title="No One&#8217;s Girl", world="mira",
      pen="Mira Lavelle", genre="Romance", sub="A novel", status="Coming soon",
      cover_img="no-ones-girl.svg",
      hook="She lived inside everyone else&#8217;s story. Now she is writing her own.",
      note="In progress — vote for it on the What I'm Writing page."),
]

WORLD_LINK = {"vesper":"vesper-locke.html","eveline":"eveline-cross.html","mira":"mira-lavelle.html"}
WORLD_NAME = {"vesper":"Vesper Locke","eveline":"Eveline Cross","mira":"Mira Lavelle"}

def cover_html(b):
    if b.get("cover_img"):
        return '<img src="../../covers/%s" alt="%s cover">' % (b["cover_img"], b["title"])
    t,g = b["cover_css"]
    return ('<div class="csscover world-%s"><div class="cp">%s</div>'
            '<div><div class="ct">%s</div><div class="cl"></div><div class="cg">%s</div></div>'
            '<div class="cp">%s</div></div>') % (b["world"], b["pen"], t, g, b["sub"])

TPL = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — {pen}</title>
<meta name="description" content="{title_plain} by {pen} — {genre}.">
<link rel="stylesheet" href="../../css/site.css">
</head>
<body class="world-{world}">
<nav>
  <div class="wrap">
    <div class="brand">{brand}</div>
    <div class="navlinks">
      <a href="../../index.html">← All Worlds</a>
      <a href="../../worlds/{worldlink}">{worldname}</a>
      <a href="#newsletter">Newsletter</a>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="stars"></div>
  <div class="rstage" style="grid-template-columns:300px 1fr">
    <div class="rcover">{cover}</div>
    <div class="rmeta">
      <p class="reyebrow">{genre}</p>
      <h1 class="rtitle">{title}</h1>
      <div class="rsub">{sub}</div>
      <p class="rhook">{hook}</p>
      <p class="rpen">a novel by {pen}</p>
      <div class="rcta">
        <a class="btn primary" href="../../worlds/{worldlink}">More {worldname}</a>
        <a class="btn ghost" href="../../index.html">All Worlds</a>
      </div>
    </div>
  </div>
</header>

<section>
  <div class="wrap blurb center">
    <p class="kicker">{status}</p>
    <h2>About this book</h2>
    <p>{note}</p>
    <p style="color:var(--muted);font-family:Arial,sans-serif;font-size:13px">Full book page (story, cast, themes, series, sample chapter, early-reader reactions) is being rolled out onto the standard template next.</p>
  </div>
</section>

<section id="newsletter">
  <div class="wrap news">
    <p class="kicker">Stay in the Loop</p>
    <h2>Get the next {worldname} book</h2>
    <form onsubmit="event.preventDefault();this.querySelector('.ok').style.display='block';">
      <input type="email" placeholder="your@email.com" required>
      <button class="btn primary" type="submit">Notify me</button>
    </form>
    <p class="ok" style="display:none;color:var(--gold);margin-top:12px">You're on the list.</p>
  </div>
</section>

<footer>
  <div class="wrap">{title} · a novel by {pen} · part of <a href="../../index.html">Three Worlds</a>
  <p class="note">Showcase page. Cover art and loglines are presentation placeholders where noted.</p></div>
</footer>
</body>
</html>
"""

for b in BOOKS:
    brand = b["title"].upper()
    html = TPL.format(
        title=b["title"], title_plain=b["title"].replace("&amp;","&").replace("&#8217;","'"),
        pen=b["pen"], genre=b["genre"], sub=b["sub"], status=b["status"],
        hook=b["hook"], note=b["note"], world=b["world"],
        worldlink=WORLD_LINK[b["world"]], worldname=WORLD_NAME[b["world"]],
        brand=brand, cover=cover_html(b))
    out = os.path.join(BASE, b["slug"], "index.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote", out)
print("done")
