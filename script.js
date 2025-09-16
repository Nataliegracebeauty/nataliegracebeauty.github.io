// Mobile nav + year + waitlist stub
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#navmenu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('#year').forEach(n=>n.textContent = new Date().getFullYear());

const waitlist = document.getElementById('waitlist-form');
if (waitlist){
  waitlist.addEventListener('submit', (e)=>{
    e.preventDefault();
    const s = document.getElementById('waitlist-status');
    s.textContent = 'Thanks! You’re on the list. When online booking opens, you’ll get an invite.';
  });
}
