
let headerContainer = document.querySelector('.header-container');
let isHeaderVisible = false;
let profile = document.querySelector('#profile');
let isProfileVisible = true;
let homeLink = document.querySelector('a[href="#profile"]');

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

homeLink.addEventListener('click', function (event) {
    headerContainer.classList.remove('visible');
    profile.classList.add('visible');
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


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
if(entry.isIntersecting) {
        entry.target.classList.add('show');
        }else{
        entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));



let table = document.querySelector(".minimalist-table");
let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

for (let i = 0; i < rows.length; i += 2) {
    rows[i].addEventListener("click", function () {
        let nextRow = this.nextElementSibling;
        if (nextRow && nextRow.classList.contains("details-row")) {
            nextRow.classList.toggle("show-details");
        }
    });
}

 function toggleMenu(){
    let icon = document.querySelector('.hamburger-icon');
    let menu = document.querySelector('.menu-links');
    icon.classList.toggle("open");
    menu.classList.toggle("open");
 }

