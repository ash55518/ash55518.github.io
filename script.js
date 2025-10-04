// Light/Dark theme toggle + niceties
(function(){
  const root = document.documentElement;
  const pref = localStorage.getItem('theme');
  if(pref){ root.classList.toggle('light', pref === 'light'); }
  document.getElementById('themeToggle').addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();

/* --- Added by ChatGPT images upgrade --- */

// Lightbox for project images
(function(){
  const lb = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightbox-content');
  const lbCaption = document.getElementById('lightbox-caption');
  if(!lb) return;
  document.querySelectorAll('[data-lightbox]')
    .forEach(el => el.addEventListener('click', (e)=>{
      e.preventDefault();
      const src = el.getAttribute('data-lightbox');
      const caption = el.getAttribute('data-caption') || '';
      lbCaption.textContent = caption;
      // For SVGs we can use <object> to preserve interactivity/animation
      lbContent.innerHTML = '';
      const obj = document.createElement('object');
      obj.setAttribute('data', src);
      obj.setAttribute('type', 'image/svg+xml');
      lbContent.appendChild(obj);
      lb.classList.add('open');
    }));
  lb.addEventListener('click', (e)=>{
    if(e.target === lb) lb.classList.remove('open');
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') lb.classList.remove('open');
  });
})();
