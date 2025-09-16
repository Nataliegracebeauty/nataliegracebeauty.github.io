document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(a){
    const el = document.querySelector(a.getAttribute('href'));
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  }
});
