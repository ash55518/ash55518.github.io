(function(){
  const root=document.documentElement;
  const pref=localStorage.getItem('theme');
  if(pref){root.classList.toggle('light',pref==='light');}
  const btn=document.getElementById('themeToggle');
  if(btn){btn.addEventListener('click',()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme',root.classList.contains('light')?'light':'dark');
  });}
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href').slice(1);
      const el=document.getElementById(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
  const y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
})();