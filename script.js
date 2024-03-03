
let headerContainer = document.querySelector('.header-container');
let isHeaderVisible = false;
let profile = document.querySelector('#profile');
let isProfileVisible = true;

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;

    if (currentScroll > 50 && !isHeaderVisible) {

        headerContainer.classList.add('visible');
        profile.classList.remove('visible');

        isHeaderVisible = true;
        isProfileVisible = false;

    } else if (currentScroll <= 50 && isHeaderVisible) {

        headerContainer.classList.remove('visible');
        profile.classList.add('visible');

        isHeaderVisible = false;
        isProfileVisible = true;
    }
});

function updateDateTime() {
    let currentDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    let formattedDate = currentDate.toLocaleDateString('en-US', options);
    let dateValues = formattedDate.split(', ');
    let formattedDateTime = dateValues.join('<br>');

    document.getElementById('currentDateTime').innerHTML = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 60000);

 function toggleMenu(){
    let icon = document.querySelector('.hamburger-icon');
    let menu = document.querySelector('.menu-links');
    icon.classList.toggle("open");
    menu.classList.toggle("open");
 }

