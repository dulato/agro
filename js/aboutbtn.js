let certf = document.getElementById('btn_certf');
let rate = document.getElementById('btn_rate');
let slideCer = document.querySelector('.certificate_slider');
let slideRate = document.querySelector('.rate_slider');
$( document ).ready(function() {
    $(slideRate).fadeOut();
});

certf.addEventListener('click', function() {
    certf.classList.add('active');
    rate.classList.remove('active');
    $(slideRate).fadeOut();
    $(slideCer).fadeIn();
});

rate.addEventListener('click', function() {
    rate.classList.add('active');
    certf.classList.remove('active');
    $(slideCer).fadeOut();
    $(slideRate).fadeIn();
});

