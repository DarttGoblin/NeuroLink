const home_header = document.querySelector('.home-header');
const nav_small_title = document.querySelector('.nav-small-title');
const nav_big_title = document.querySelector('.nav-big-title');
const nav_sub_title = document.querySelector('.nav-sub-title');
const nav_button = document.querySelector('.nav-button');
const home_header_button = document.querySelector('.home-header-button');

home_header.style.backgroundImage = `url('Home.Media/bg_image1.jpg')`;
home_header_button.onclick = function() {
    window.location.href = '../About/About.html';
}
