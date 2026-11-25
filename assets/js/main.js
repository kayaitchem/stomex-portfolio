/* =========================================================
   Grzebieniak · Stomex Studio — portfolio
   ========================================================= */

/* ---------- USTAWIENIA DO UZUPEŁNIENIA ---------- */
const CONTACT = {
  email: 'stomex.studio@gmail.com',
  phone: '+48 790 422 020',
};
// Opcjonalny klip w tle hero, np. animacja renderu z Higgsfield: 'assets/video/hero.mp4'
const HERO_VIDEO = null;

/* ---------- PROJEKTY ---------- */
const PROJECTS = [
  {
    id: 'orzech-bordo', dir: 'p1', n: 17,
    title: 'Orzech & Bordo',
    sub: 'Mieszkanie · ciepły minimalizm',
    lead: 'Ciemny orzech, jasny kamień i trochę bordo w dodatkach.',
    short: 'Mieszkanie z otwartą kuchnią, sypialnią z biurkiem, pokojem dziecka i łazienką.',
    tags: ['Mieszkanie', 'Projekt kompleksowy', 'Orzech', 'Bordo'],
    desc: [
      'W strefie dziennej jest dużo orzecha: fronty kuchni, lamele na ścianie, stół. Żeby nie zrobiło się ciężko, ściany zostały jasne, a blaty i półwysep są z imitacji marmuru. Bordo pojawia się tylko w dodatkach, czyli w poduszkach, pledzie i kwiatach.',
      'Lamele mają ukryte podświetlenie. Okrągły stół stoi między kuchnią a sofą, więc jadalnia nie odcina salonu od reszty.',
      'W łazience jest owalne lustro z podświetleniem i ażurowa zabudowa. Pokój dziecka jest jaśniejszy. Ma łóżko w kształcie chmur, lampki-chmurki na ścianie i półki na książki.',
      'Sypialnia zaś łączy w sobie kolory drewna i kremów. Jest spokojną, otulającą przestrzenią, z miejscem na biurko.',
    ],
    meta: [
      ['Typ', 'Mieszkanie'],
      ['Pomieszczenia', 'Salon z aneksem, sypialnia z biurem, pokój dziecięcy, łazienka, przedpokój'],
      ['Materiały', 'Fornir orzechowy, lamele, laminat z imitacją marmuru, kamienne płytki, brąz szczotkowany'],
      ['Powierzchnia', '54 m²'],
    ],
    labels: ['Strefa dzienna', 'Salon z jadalnią', 'Kuchnia', 'Jadalnia', 'Kuchnia z jadalnią', 'Salon', 'Ściana RTV', 'Kuchnia', 'Łazienka', 'Łazienka', 'Łazienka', 'Sypialnia', 'Sypialnia: strefa pracy', 'Pokój dziecięcy', 'Pokój dziecięcy', 'Pokój dziecięcy', 'Przedpokój'],
  },
  {
    id: 'jasne-poddasze', dir: 'p2', n: 16,
    title: 'Jasne Poddasze',
    sub: 'Dom z poddaszem · naturalne drewno',
    lead: 'Dom ze skosami i oknami dachowymi. Jasny dąb, biel i kamienna wyspa w kuchni.',
    short: 'Kuchnia z salonem, sypialnia, łazienka na poddaszu i dwa pokoje dla dzieci.',
    tags: ['Dom', 'Poddasze', 'Dąb', 'Pokoje dziecięce'],
    desc: [
      'Prawie wszystko jest tu pod skosem, a mimo to większość szaf i zabudów jest z marketów, bez konieczności zamawiania ich na wymiar. Wzdłuż sufitu biegną linie LED, które pokazują jego kształt.',
      'W kuchni stoi kamienna wyspa z blatem schodzącym do podłogi. Nad nią wisi dekoracyjna lampa. Za stołem jest tapeta ścienna.',
      'Pokój dziewczynki jest różowy, z toaletką i lampką w kształcie chmury. Znajduje się tam także przestrzeń kreatywna dla pasjonatki klocków lego. W pokoju chłopca są grafity i biel, biurko pod oknem dachowym i komoda na modele motocykli. W łazience na poddaszu zestawiliśmy drewno z mocno kontrastowym kamieniem.',
    ],
    meta: [
      ['Typ', 'Dom jednorodzinny'],
      ['Pomieszczenia', 'Salon z kuchnią, przedpokój, sypialnia, łazienka, pokój chłopca, pokój dziewczynki, pralnia'],
      ['Materiały', 'Dąb naturalny, kamień, tapeta ścienna, LED liniowy'],
      ['Powierzchnia', '100 m²'],
    ],
    labels: ['Kuchnia z wyspą', 'Kuchnia', 'Salon', 'Strefa wypoczynku', 'Strefa dzienna', 'Przedpokój', 'Kuchnia', 'Sypialnia', 'Pokój dziewczynki', 'Łazienka', 'Pokój dziewczynki', 'Łazienka', 'Pokój dziewczynki', 'Pokój dziewczynki', 'Pokój chłopca', 'Pokój chłopca'],
  },
  {
    id: 'black-edition', dir: 'p3', n: 12,
    title: 'Black Edition',
    sub: 'Mieszkanie · ciemna elegancja',
    lead: 'Prawie całe mieszkanie jest czarne. Różnicę robią faktury i światło.',
    short: 'Ciemne mieszkanie z biokominkiem, kamienną ścianą w sypialni i garderobą za szkłem.',
    tags: ['Mieszkanie', 'Ciemne wnętrze', 'Marmur', 'Biokominek'],
    desc: [
      'Czerń jest tu w kilku wersjach: matowe fronty, czarny marmur z jasnymi żyłkami, skórzana sofa i surowy kamień. Dzięki temu wnętrze nie wygląda płasko, mimo jednego koloru.',
      'Biokominek w salonie stoi pod ścianą z lamel, między którymi biegną pionowe pasy światła. Bar w kuchni jest podświetlony od spodu.',
      'Za łóżkiem jest ściana z kamienia, a obok garderoba za szklanymi drzwiami w czarnych ramach. W łazience użyliśmy czarnego marmuru i drewna, a nad umywalką powiesiliśmy okrągłe lustro z podświetleniem.',
    ],
    meta: [
      ['Typ', 'Mieszkanie'],
      ['Pomieszczenia', 'Salon z kuchnią, przedpokój, sypialnia z garderobą, łazienka'],
      ['Materiały', 'Czarny marmur, lamele, kamień dekoracyjny, skóra, szkło w ramach'],
      ['Powierzchnia', '37 m²'],
    ],
    labels: ['Kuchnia', 'Salon', 'Kuchnia', 'Salon z biokominkiem', 'Kuchnia', 'Przedpokój', 'Sypialnia', 'Garderoba', 'Sypialnia', 'Łazienka', 'Łazienka', 'Salon'],
  },
  {
    id: 'boho', dir: 'boho', n: 16,
    title: 'Dom Boho',
    sub: 'Dom · rustykalne akcenty',
    lead: 'Rattan, len, parkiet w jodełkę i kominek w salonie.',
    short: 'Dom w stylu boho z rustykalnymi dodatkami, bez nadmiaru dekoracji.',
    tags: ['Dom', 'Boho', 'Rattan', 'Kominek'],
    desc: [
      'Kuchnia jest biała, z drewnianymi blatami i wyspą. Nad stołem wiszą rattanowe lampy, a na podłodze leży parkiet w jodełkę.',
      'W salonie jest narożny kominek w białej obudowie. W tym wnętrzu królują rustykalne dodatki.',
      'W sypialni przeważają len i plecionki. W łazience postawiono na prostotę, połączenie drewna i płytek z imitacją kamienia.',
    ],
    meta: [
      ['Typ', 'Dom jednorodzinny'],
      ['Pomieszczenia', 'Salon, kuchnia, jadalnia, sypialnie, łazienki, wiatrołap, kotłownia'],
      ['Materiały', 'Dąb, rattan, len, parkiet w jodełkę, płytki z imitacją kamienia'],
      ['Powierzchnia', '78 m²'],
    ],
    labels: ['Salon', 'Kuchnia z wyspą', 'Kuchnia z kominkiem', 'Jadalnia', 'Sypialnia', 'Jadalnia', 'Salon', 'Łazienka', 'Łazienka', 'Łazienka', 'Wiatrołap', 'Salon', 'Łazienka na poddaszu', 'Łazienka', 'Łazienka na poddaszu', 'Łazienka na poddaszu'],
  },
  {
    id: 'modern-classic', dir: 'mc', n: 12,
    title: 'Modern Classic',
    sub: 'Mieszkanie · ponadczasowa klasyka',
    lead: 'Ciepły orzech, beże i dużo podświetleń LED.',
    short: 'Mieszkanie z lamelami przy ścianie RTV, okrągłym stołem i owalnym lustrem w łazience.',
    tags: ['Mieszkanie', 'Modern classic', 'Orzech', 'Lamele'],
    desc: [
      'Kolory są spokojne: beż, piasek i orzech. Czerń pojawia się tylko w armaturze, uchwytach i lampach.',
      'Ścianę z telewizorem z obu stron zamykają podświetlone lamele. W jadalni stoi okrągły stół, a kuchnia ma fronty w kolorze orzechu i jasny blat.',
      'W łazience pojawia się owalne lustro z podświetleniem, drewniane szafki i duże płyty w kolorze piaskowym.',
    ],
    meta: [
      ['Typ', 'Mieszkanie'],
      ['Pomieszczenia', 'Salon z kuchnią i jadalnią, przedpokój, łazienka'],
      ['Materiały', 'Orzech, lamele, imitacja kamienia, czarna armatura, światło LED'],
      ['Powierzchnia', '34 m²'],
    ],
    labels: ['Jadalnia', 'Salon', 'Strefa dzienna', 'Jadalnia', 'Jadalnia', 'Kuchnia', 'Przedpokój', 'Łazienka', 'Łazienka', 'Łazienka', 'Salon z kuchnią', 'Łazienka'],
  },
  {
    id: 'modern-farmhouse', dir: 'mf', n: 18,
    title: 'Modern Farmhouse',
    sub: 'Dom · nowoczesna wieś',
    lead: 'Orzechowe fronty, marmur, drewniane schody i kominek z niszą na drewno.',
    short: 'Dom z kuchnią w klasycznych frontach, dużą ilością przeszklenia i retro dodatkami.',
    tags: ['Dom', 'Farmhouse', 'Orzech', 'Marmur'],
    desc: [
      'Kuchnia ma fronty frezowane w orzechu i wyspę ze spieku z imitacją marmuru. Nad wyspą wiszą szklane lampy.',
      'Duży stół stoi przy oknach, obok jest biblioteczka. Z holu z kominkiem drewniane schody prowadzą na poddasze.',
      'Trzy łazienki są wykonane w całkiem innych klimatach: w jednej z nich króluje marmur i mosiężna armatura, w kolejnej dąb i kamienne płytki, a jeszcze w następnej zielone płytki w połączeniu z piaskowym spiekiem i złotymi dodatkami. Pomimo różnorodności całość inwestycji jest spójna.',
    ],
    meta: [
      ['Typ', 'Dom jednorodzinny'],
      ['Pomieszczenia', 'Salon z kuchnią i jadalnią, hol ze schodami, łazienki na parterze i poddaszu'],
      ['Materiały', 'Orzech, marmur, dąb, mosiądz, płytki z imitacją kamienia'],
      ['Powierzchnia', '78 m²'],
    ],
    labels: ['Salon z kominkiem', 'Jadalnia', 'Hol ze schodami', 'Kuchnia', 'Kuchnia', 'Kuchnia', 'Schody', 'Łazienka na poddaszu', 'Łazienka na poddaszu', 'Łazienka', 'Łazienka na parterze', 'Strefa dzienna', 'Strefa dzienna', 'Łazienka', 'Hol', 'Kuchnia', 'Jadalnia z biblioteczką', 'Salon z kominkiem'],
  },
];

const pad = (n) => String(n).padStart(2, '0');
const img = (p, i, small) => `assets/img/${p.dir}/${pad(i)}${small ? '-s' : ''}.webp`;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const hasGsap = !!(window.gsap && window.ScrollTrigger);

/* ---------- RENDER ---------- */
function renderContact() {
  $$('[data-contact="email"]').forEach((a) => { a.href = `mailto:${CONTACT.email}`; a.querySelector('span') ? (a.querySelector('span').textContent = CONTACT.email) : (a.textContent = CONTACT.email); });
  $$('[data-contact="phone"]').forEach((a) => { a.href = `tel:${CONTACT.phone.replace(/\s/g, '')}`; a.textContent = CONTACT.phone; });
  $('#year').textContent = new Date().getFullYear();
}

function renderHero() {
  const wrap = $('.hero__media');
  wrap.innerHTML = PROJECTS.map((p, i) => `
    <div class="hero__slide${i === 0 ? ' is-active' : ''}">
      ${i === 0 && HERO_VIDEO ? `<video src="${HERO_VIDEO}" autoplay muted loop playsinline poster="${img(p, 1)}"></video>` : `<img src="${img(p, 1)}" alt="" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>`}
    </div>`).join('');
}

function renderWork() {
  $('#workList').innerHTML = PROJECTS.map((p, i) => `
    <article class="wk" data-id="${p.id}">
      <div class="wk__media" data-view role="button" tabindex="0" aria-label="Otwórz projekt ${p.title}">
        <img src="${img(p, 1)}" alt="${p.title}: ${p.labels[0]}" loading="lazy">
        <div class="wk__thumbs" aria-hidden="true">
          <img src="${img(p, 2, true)}" alt="" loading="lazy"><img src="${img(p, 3, true)}" alt="" loading="lazy"><img src="${img(p, 4, true)}" alt="" loading="lazy">
        </div>
      </div>
      <div class="wk__body">
        <span class="wk__n">${pad(i + 1)} / ${pad(PROJECTS.length)}</span>
        <h3 class="wk__title">${p.title.replace('&', '&amp;')}</h3>
        <p class="wk__sub">${p.sub}</p>
        <p class="wk__text">${p.short}</p>
        <ul class="wk__tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
        <a href="#projekt/${p.id}" class="wk__link" data-hover>Zobacz projekt <i class="arrow"></i></a>
      </div>
    </article>`).join('');

  $$('.wk').forEach((el) => {
    const open = () => openProject(el.dataset.id);
    $('.wk__media', el).addEventListener('click', open);
    $('.wk__media', el).addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    $('.wk__link', el).addEventListener('click', (e) => { e.preventDefault(); open(); });
  });
}

/* ---------- HERO SLIDESHOW ---------- */
let heroIndex = 0, heroTimer;
function heroGo(next) {
  const slides = $$('.hero__slide');
  const cur = slides[heroIndex];
  heroIndex = (next + slides.length) % slides.length;
  const nxt = slides[heroIndex];
  slides.forEach((s) => s.classList.remove('is-leaving'));
  cur.classList.remove('is-active'); cur.classList.add('is-leaving');
  void nxt.offsetWidth;
  nxt.classList.add('is-active');
  // restart ken burns
  const im = nxt.querySelector('img'); if (im) { im.style.animation = 'none'; void im.offsetWidth; im.style.animation = ''; }
  $('.hero__index b').textContent = pad(heroIndex + 1);
  $('.hero__name').textContent = PROJECTS[heroIndex].title;
  runHeroProgress();
}
function runHeroProgress() {
  const bar = $('.hero__progress i'); bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
}
function startHero() {
  if (reduced) return;
  runHeroProgress();
  heroTimer = setInterval(() => heroGo(heroIndex + 1), 6500);
}

/* ---------- PROJECT OVERLAY ---------- */
const overlay = $('#project');
const scroller = $('.project__scroll', overlay);
let currentProject = null, lastFocus = null, galleryObserver;

function layoutFor(count) {
  const out = []; const cycle = [1, 2, 3, 2]; let k = 0; let left = count;
  const map = { 1: ['w'], 2: ['h', 'h'], 3: ['t', 't', 't'] };
  while (left > 0) {
    let size = cycle[k % cycle.length]; let kind = size === 2 && k % 4 === 3 ? ['s', 'n'] : map[size];
    if (size > left) { size = left; kind = map[size]; }
    out.push(...kind); left -= size; k++;
  }
  return out;
}

function openProject(id, fromHash) {
  const p = PROJECTS.find((x) => x.id === id); if (!p) return;
  const switching = overlay.classList.contains('is-open');
  currentProject = p;
  if (!switching) lastFocus = document.activeElement;

  $('#projectHero').src = img(p, 1);
  $('#projectHero').alt = `${p.title}: ${p.labels[0]}`;
  $('#projectTitle').innerHTML = p.title.replace('&', '<em>&amp;</em>');
  $('#projectLead').textContent = p.lead;
  $('#projectDesc').innerHTML = p.desc.map((t) => `<p>${t}</p>`).join('');
  $('#projectMeta').innerHTML = p.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  const kinds = layoutFor(p.n - 1);
  $('#projectGallery').innerHTML = kinds.map((k, j) => {
    const i = j + 2; const small = k === 't' || k === 'n' || k === 'h';
    return `<figure class="pg pg--${k} pre" data-i="${i}"><img src="${img(p, i, small && window.innerWidth < 1400)}" data-full="${img(p, i)}" alt="${p.title}: ${p.labels[i - 1] || ''}" loading="lazy"><figcaption>${p.labels[i - 1] || ''}</figcaption></figure>`;
  }).join('');
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  const nextEl = $('#projectNext'); nextEl.dataset.id = next.id; nextEl.href = `#projekt/${next.id}`;
  $('strong', nextEl).textContent = next.title;

  $$('.pg', overlay).forEach((f) => f.addEventListener('click', () => openLightbox(+f.dataset.i)));

  // reveal gallery on scroll inside overlay
  galleryObserver && galleryObserver.disconnect();
  galleryObserver = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.remove('pre'); e.target.classList.add('is-in'); galleryObserver.unobserve(e.target); }
  }), { root: scroller, rootMargin: '0px 0px -8% 0px' });
  $$('.pg', overlay).forEach((f) => galleryObserver.observe(f));

  if (switching) {
    scroller.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    const hi = $('#projectHero'); hi.style.transition = 'none'; hi.style.transform = 'scale(1.15)'; void hi.offsetWidth; hi.style.transition = ''; hi.style.transform = '';
  } else {
    scroller.scrollTop = 0;
    overlay.classList.add('is-open'); overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked'); window.__lenis && window.__lenis.stop();
    setTimeout(() => $('.project__close').focus({ preventScroll: true }), 400);
  }
  if (!fromHash) history.replaceState(null, '', `#projekt/${p.id}`);
  animateProjectHead();
}

function animateProjectHead() {
  if (!hasGsap || reduced) return;
}

function closeProject() {
  overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked'); window.__lenis && window.__lenis.start();
  history.replaceState(null, '', location.pathname + location.search);
  currentProject = null;
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}

$('.project__close').addEventListener('click', closeProject);
$('#projectNext').addEventListener('click', (e) => { e.preventDefault(); openProject(e.currentTarget.dataset.id); });

/* ---------- LIGHTBOX ---------- */
const lb = $('#lightbox'); let lbIndex = 2;
function openLightbox(i) {
  lbIndex = i; showLb(); lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false');
}
function showLb() {
  const p = currentProject; if (!p) return;
  const im = $('img', lb); im.classList.remove('is-loaded');
  im.onload = () => im.classList.add('is-loaded');
  im.src = img(p, lbIndex); im.alt = `${p.title}: ${p.labels[lbIndex - 1] || ''}`;
  $('figcaption', lb).textContent = `${pad(lbIndex - 1)} / ${pad(p.n - 1)} · ${p.labels[lbIndex - 1] || ''}`;
}
function lbStep(d) { const p = currentProject; lbIndex = ((lbIndex - 2 + d + (p.n - 1)) % (p.n - 1)) + 2; showLb(); }
function closeLb() { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); }
$('.lightbox__close').addEventListener('click', closeLb);
$('.lightbox__prev').addEventListener('click', () => lbStep(-1));
$('.lightbox__next').addEventListener('click', () => lbStep(1));
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => { if (touchX === null) return; const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1); touchX = null; });

document.addEventListener('keydown', (e) => {
  if (lb.classList.contains('is-open')) {
    if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') lbStep(1); if (e.key === 'ArrowLeft') lbStep(-1);
  } else if (overlay.classList.contains('is-open') && e.key === 'Escape') closeProject();
});

function routeFromHash() {
  const m = location.hash.match(/^#projekt\/([\w-]+)/);
  if (m) openProject(m[1], true);
  else if (overlay.classList.contains('is-open')) closeProject();
}
window.addEventListener('hashchange', routeFromHash);

/* ---------- MOBILE MENU ---------- */
const burger = $('.nav__burger'), menu = $('.menu');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open); menu.classList.toggle('is-open', open); menu.setAttribute('aria-hidden', !open);
  document.body.classList.toggle('is-locked', open); open ? window.__lenis?.stop() : window.__lenis?.start();
});
$$('.menu a').forEach((a) => a.addEventListener('click', () => burger.click()));

/* ---------- SMOOTH ANCHORS ---------- */
$$('a[href^="#"]').forEach((a) => {
  const href = a.getAttribute('href'); if (href.startsWith('#projekt')) return;
  a.addEventListener('click', (e) => {
    const t = href === '#top' ? document.body : $(href); if (!t) return;
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo(href === '#top' ? 0 : t, { offset: 0, duration: 1.6 });
    else t.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------- CURSOR + MAGNETIC ---------- */
function initCursor() {
  if (!finePointer) return;
  const c = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`; });
  (function loop() { rx += (mx - rx) * .16; ry += (my - ry) * .16; ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`; requestAnimationFrame(loop); })();
  document.addEventListener('mouseover', (e) => {
    const view = e.target.closest('[data-view], .pg');
    const hov = e.target.closest('a, button, [data-hover]');
    c.classList.toggle('is-view', !!view);
    c.classList.toggle('is-hover', !view && !!hov);
    $('.cursor__label').textContent = e.target.closest('.pg') ? 'Powiększ' : 'Zobacz';
  });

  $$('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * .3, y = (e.clientY - r.top - r.height / 2) * .4;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)'; el.style.transform = ''; setTimeout(() => (el.style.transition = ''), 600); });
  });

  $$('.card').forEach((card) => card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect(); card.style.setProperty('--mx', `${e.clientX - r.left}px`); card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));
}

/* ---------- NAV ON SCROLL ---------- */
function initNav() {
  const nav = $('.nav'); let last = 0;
  const onScroll = (y) => {
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > last && y > 400 && !menu.classList.contains('is-open'));
    last = y;
  };
  if (window.__lenis) window.__lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else addEventListener('scroll', () => onScroll(scrollY), { passive: true });
}

/* ---------- WORDS ---------- */
function splitWords(el) {
  const html = el.innerHTML.replace(/&nbsp;/g, ' ');
  el.innerHTML = html.split(/ +/).map((w) => `<span class="w">${w}</span>`).join(' ');
  return $$('.w', el);
}

/* ---------- STEPS (svg draw) ---------- */
function initSteps() {
  const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-drawn'); io.unobserve(e.target); } }), { threshold: .35 });
  $$('.step').forEach((s) => io.observe(s));
}

/* ---------- GSAP ANIMATIONS ---------- */
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Lenis smooth scroll
  if (window.Lenis && !reduced) {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // hero parallax out
  gsap.to('.hero__media', { yPercent: 18, scale: 1.06, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__content', { yPercent: -22, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true } });

  // marquee speed on scroll velocity
  const track = $('.marquee__track');
  ScrollTrigger.create({ trigger: '.marquee', start: 'top bottom', end: 'bottom top', onUpdate: (s) => {
    const v = Math.min(Math.abs(s.getVelocity()) / 600, 4); track.style.animationDuration = `${38 / (1 + v)}s`;
  } });

  // section line reveals (except hero)
  $$('.line').forEach((ln) => {
    if (ln.closest('.hero')) return;
    gsap.from(ln.children, { yPercent: 115, rotate: 2, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: ln, start: 'top 88%' } });
  });
  $$('.eyebrow, .section__lead').forEach((el) => {
    if (el.closest('.hero') || el.closest('.project')) return;
    gsap.from(el, { y: 30, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  // words scrub
  const words = splitWords($('.intro__text'));
  gsap.to(words, { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: '.intro__text', start: 'top 78%', end: 'bottom 45%', scrub: .6 } });

  // counters
  $$('[data-count]').forEach((el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || ''; const o = { v: 0 };
    gsap.to(o, { v: end, duration: 2.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' }, onUpdate: () => (el.textContent = Math.round(o.v) + suf) });
  });

  // work items
  $$('.wk').forEach((wk) => {
    const media = $('.wk__media', wk), im = $('.wk__media > img', wk);
    gsap.fromTo(media, { clipPath: 'inset(18% 12% 18% 12%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: wk, start: 'top 95%', end: 'top 35%', scrub: .8 } });
    gsap.fromTo(im, { yPercent: -7, scale: 1.18 }, { yPercent: 7, scale: 1, ease: 'none', scrollTrigger: { trigger: wk, start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from($$('.wk__body > *', wk), { y: 50, opacity: 0, duration: 1.2, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: wk, start: 'top 70%' } });
  });

  // process horizontal pin (desktop)
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    const trackEl = $('.process__track');
    const dist = () => trackEl.scrollWidth - innerWidth;
    gsap.to(trackEl, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.process__pin', start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: .8, invalidateOnRefresh: true, anticipatePin: 1 } });
    gsap.to('.process__progress i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.process__pin', start: 'top top', end: () => `+=${dist()}`, scrub: true } });
  });
  mm.add('(max-width: 900px)', () => {
    $$('.step').forEach((s) => gsap.from(s, { y: 70, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 85%' } }));
  });

  // offer cards
  gsap.from('.card', { y: 80, opacity: 0, duration: 1.3, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '.offer__grid', start: 'top 80%' } });

  // contact bg parallax
  gsap.fromTo('.contact__bg img', { yPercent: -12 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.contact__links > *', { y: 40, opacity: 0, duration: 1.2, stagger: .1, ease: 'expo.out', scrollTrigger: { trigger: '.contact__links', start: 'top 90%' } });

  addEventListener('load', () => ScrollTrigger.refresh());
}

/* ---------- PRELOADER + INTRO ---------- */
function intro() {
  const pre = $('.preloader');
  const first = $('.hero__slide img');
  const ready = Promise.all([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    first && !first.complete ? new Promise((r) => { first.onload = first.onerror = r; }) : Promise.resolve(),
  ]);
  const timeout = new Promise((r) => setTimeout(r, 3500));

  if (!hasGsap || reduced) {
    Promise.race([ready, timeout]).then(() => { pre.remove(); startHero(); });
    return;
  }
  const count = $('.preloader__count span'); const o = { v: 0 };
  const tl = gsap.timeline();
  tl.to('.preloader__logo', { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'expo.inOut' })
    .to(o, { v: 82, duration: 1.4, ease: 'power2.inOut', onUpdate: () => (count.textContent = Math.round(o.v)) }, 0)
    .to('.preloader__bar span', { scaleX: .82, duration: 1.4, ease: 'power2.inOut' }, 0);

  gsap.set('.hero__title .line > span', { yPercent: 115 });
  gsap.set(['.hero__lead', '.hero__bottom .btn', '.hero__caption', '.nav'], { opacity: 0, y: 24 });
  gsap.set('.hero__media', { scale: 1.25 });

  Promise.all([Promise.race([ready, timeout]), new Promise((r) => tl.eventCallback('onComplete', r))]).then(() => {
    gsap.timeline()
      .to(o, { v: 100, duration: .5, onUpdate: () => (count.textContent = Math.round(o.v)) })
      .to('.preloader__bar span', { scaleX: 1, duration: .5 }, '<')
      .to(pre, { yPercent: -100, duration: 1.2, ease: 'expo.inOut', onComplete: () => pre.remove() }, '+=.1')
      .to('.hero__media', { scale: 1, duration: 2.2, ease: 'expo.out' }, '-=.75')
      .to('.hero__title .line > span', { yPercent: 0, duration: 1.4, stagger: .1, ease: 'expo.out' }, '-=1.8')
      .to(['.nav', '.hero__lead', '.hero__bottom .btn', '.hero__caption'], { opacity: 1, y: 0, duration: 1.2, stagger: .08, ease: 'expo.out' }, '-=1.1')
      .add(startHero, '-=1');
  });
}

/* ---------- BOOT ---------- */
renderContact();
renderHero();
renderWork();
initSteps();
if (hasGsap && !reduced) initScrollAnimations();
initNav();
initCursor();
intro();
routeFromHash();
