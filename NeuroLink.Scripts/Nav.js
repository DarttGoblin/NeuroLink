const nav = document.querySelector('.nav-section');
const nav_logo = document.querySelector('.nav-logo');
const nav_link = document.querySelectorAll('.nav-link');
const settings = document.querySelector('.settings');
const settings_line = document.querySelectorAll('.settings-line');
const responsive_nav = document.querySelector('.responsive-nav');
const responsive_icon = document.querySelector('.responsive-icon');
const responsive_nav_link = document.querySelectorAll('.responsive-nav-link');

const pages = [
    '../Home/Home.html',
    'not_available', // ../../NeuroLink.html
    '../WeatherBoard/WeatherBoard.html',
    '../Archive/Archive.html',
    '../About/About.html',
];

const pages_from_nl = [
    'NeuroLink.Pages/Home/Home.html',
    'not_available', // NeuroLink.html
    'NeuroLink.Pages/WeatherBoard/WeatherBoard.html',
    'NeuroLink.Pages/Archive/Archive.html',
    'NeuroLink.Pages/About/About.html',
];

const native_pages = [
    'Home.html',
    'NeuroLink.html',
    'WeatherBoard.html',
    'Archive.html',
    'About.html',
]

nav_link.forEach((link, index) => {
    link.onclick = function() {
        if (pages[index] == 'not_available') {
            alert("Access to the Neurolink page is restricted. This page only works locally with the car.");
            return;
        }

        if (window.location.href.includes('NeuroLink.html')) {
            window.location.href = pages_from_nl[index];
        }

        else {
            window.location.href = pages[index];
        }
    }
});

responsive_nav_link.forEach((link, index) => {
    link.onclick = function() {
        if (pages[index] == 'not_available') {
            alert("Access to the Neurolink page is restricted. This page only works locally with NeuroDrive.");
            return;
        }

        if (window.location.href.includes('NeuroLink.html')) {
            window.location.href = pages_from_nl[index];
        }

        else {
            window.location.href = pages[index];
        }
    }
})

window.onscroll = () => {    
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
        settings_line.forEach(line => {
            line.classList.add('settings-line-scrolled');
        });
        if (window.location.href.includes('NeuroLink.html')) {
            nav_logo.src = 'NeuroLink.Media/logo-no-bg-black.png';
        }
        else {
            nav_logo.src = '../../NeuroLink.Media/logo-no-bg-black.png';
        }

    } 
    else {
        nav.classList.remove('nav-scrolled'); 
        settings_line.forEach(line => {
            line.classList.remove('settings-line-scrolled');
        });
        if (window.location.href.includes('NeuroLink.html')) {
            nav_logo.src = 'NeuroLink.Media/logo-no-bg.png';
        }
        else {
            nav_logo.src = '../../NeuroLink.Media/logo-no-bg.png';
        }
    }
};

native_pages.forEach((page, index) => {
    if (window.location.href.includes(page)) {
        nav_link[index].style.color = 'rgb(242, 218, 59)';
    }
});

settings.onclick = function() {
    responsive_nav.style.display = 'flex';
}

responsive_icon.onclick = function() {
    responsive_nav.style.display = 'none';
}