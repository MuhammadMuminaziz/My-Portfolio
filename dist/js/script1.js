AOS.init({
    duration: 800,
});

// Timer
function displayTime(){
    let jam = document.querySelector('#jam');
    let menit = document.querySelector('#menit');
    let detik = document.querySelector('#detik');
    let waktu = document.querySelector('#time');

    let times = new Date();
    let time = new Date(times.getTime());
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    jam.innerHTML = h.length == 1 ? '0'+ h : h;
    menit.innerHTML = m.length == 1 ? '0'+ m : m;
    detik.innerHTML = s.length == 1 ? '0'+ s : s;
}

// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    const toContact = document.querySelector('#to-contact');

    if( window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
        toContact.classList.remove('hidden');
        toContact.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
        toContact.classList.remove('flex');
        toContact.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik di luar humburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const img1 = document.querySelector('#mubtadev-1');
const img2 = document.querySelector('#mubtadev-2');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
        img1.classList.add('hidden')
        img2.classList.remove('hidden')
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
        img1.classList.remove('hidden')
        img2.classList.add('hidden')
    }
});

// pindahkan posisi toggle sesuai moda
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    img1.classList.add('hidden')
} else {
    darkToggle.checked = false;
    img2.classList.add('hidden')
  }
