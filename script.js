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