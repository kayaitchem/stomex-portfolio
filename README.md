# portfolio.stomex.pl

Statyczna strona (HTML + CSS + JS), bez budowania.

## Wdrożenie
Wgraj **całą zawartość folderu `portfolio/`** (index.html + assets/) do katalogu głównego subdomeny `portfolio.stomex.pl` (np. przez FTP / menedżer plików hostingu).

## Do uzupełnienia przed publikacją
- `assets/js/main.js` → `CONTACT` (e-mail i telefon). Teraz są tam wartości przykładowe.
- To samo w `index.html` w sekcji `#kontakt` (fallback bez JS).

## Edycja projektów
Opisy, tagi, palety kolorów i podpisy zdjęć są w tablicy `PROJECTS` w `assets/js/main.js`.
Zdjęcia: `assets/img/<folder>/01.webp … NN.webp` (+ wersja `-s` = miniatura). Plik `01` to okładka.

## Wideo w hero (Higgsfield)
Wygeneruj klip z renderu (np. Kling 3.0, 5 s, bez dźwięku), zapisz jako `assets/video/hero.mp4`
i ustaw w `main.js`: `const HERO_VIDEO = 'assets/video/hero.mp4';`

## Biblioteki (CDN)
GSAP 3.12 + ScrollTrigger, Lenis (płynny scroll), Google Fonts: Cormorant Garamond + Manrope.
Strona działa też bez nich, tylko bez animacji scrolla.
