const weatherboard_view_button = document.querySelector('.weatherboard-view-button');
const weather_history = document.querySelector('.weather-history');

weatherboard_view_button.onclick = function() {
    weather_history.scrollIntoView({behavior: 'smooth'});
}