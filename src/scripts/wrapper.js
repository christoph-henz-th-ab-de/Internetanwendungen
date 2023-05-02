const body = document.getElementById('body');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-login');
const btnMobile = document.querySelector('.mobile-login')
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    //body.style.overflowY = 'hidden';
});

btnMobile.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    //body.style.overflowY = 'hidden';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    //body.style.overflowY = 'visible';
})

btnPopup.addEventListener('click', () => {
    account_drp_dwn.classList.add('active-popup');
});