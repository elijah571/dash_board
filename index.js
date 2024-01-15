const sideMenu = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const menuBtn = document.querySelector('#menu-btn');
const themeToggler = document.querySelector('.theme-toggler');
//close
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
//open
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
//toggle ligth

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active')
})