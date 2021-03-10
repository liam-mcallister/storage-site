/*----------------------------------------------------
------------------------------- Table of Contents ----
------------------------------------------------------

1. Cookie Box
2. Disable Scroll
3. Back To Top Button
4. FAQ Accordian
5. Google Maps
6. Size Guide

*/


/*---------------------------------1. Cookie Box----*/
(() => {
    // If the cookieAccept key can't be found in local storage, display the Cookie Box
    if (!localStorage.getItem('cookieAccept')) {
        document.body.innerHTML += '\
		<div id="cookie" class="cookie">\
            <p>We use <a href="cookie.html">cookies</a></p>\
            <button id="cookieBtn" class="btn">OK</button>\
		</div>\
        ';

        // When the OK button is clicked, add the cookieAccept key to local storage and remove the Cookie Box
        const cookieClick = (e) => {
            e.preventDefault();
            document.getElementById('cookie').style.display = 'none';
            localStorage.setItem('cookieAccept', true);
        }

        document.getElementById('cookieBtn').addEventListener('click', cookieClick, false);
    }
})();

/*-----------------------------2. Disable Scroll----*/
const burger = document.getElementById("burger-btn");

// Disable scrolling when navigation menu is open
burger.addEventListener("click", function () {
    if (burger.checked) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
});

/*-------------------------3. Back To Top Button----*/
const btnToTop = document.getElementById('btn-to-top');

// When page is scrolled more then 100 pixels from the top, display the to top button
// Otherwise don't display the button
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnToTop.style.display = 'block';
    } else {
        btnToTop.style.display = 'none';
    }
});

// When the To Top button is clicked, scroll smoothly to the top of the page
btnToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/*------------------------------4. FAQ Accordian----*/
const faqQuestion = document.querySelectorAll('.question');
const faqAnswer = document.querySelectorAll('.answer');

// Loop through all the FAQ Answer elements and hide them
for (let i = 0; i < faqAnswer.length; i++) {
    faqAnswer[i].style.display = 'none';
}

// Loop through all the FAQ Question elements
// When a question element is clicked, if the next answer element is displayed, hide it
// Otherwise show it when the question element is clicked
for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener('click', function () {
        this.classList.toggle("active");
        let answerStatus = this.nextElementSibling;
        if (answerStatus.style.display === 'block') {
            answerStatus.style.display = 'none';
        } else {
            answerStatus.style.display = 'block';
        }
    });
}


/*--------------------------------5. Google Maps----*/
function initMap() {
    // Store coordinates in a variable
    const belfast = { lat: 54.607868, lng: -5.926437 };

    // Create a map in the contact-map element, zoomed and centered to our coordinates
    const map = new google.maps.Map(document.getElementById('contact-map'), {
        zoom: 15,
        center: belfast
    });

    // Display a marker on our coordinates
    const marker = new google.maps.Marker({ position: belfast, map: map });
};


/*---------------------------------6. Size Guide----*/
const tabClick = (e) => {
    e.preventDefault();
    let paneActive = document.querySelectorAll('.pane-active');

    // Loop through all active panes and remove the pane-active class
    for (let i = 0; i < paneActive.length; i++) {
        paneActive[i].className = paneActive[i].className.replace('pane-active', '');
    }

    // Add the pane-active class to the clicked tab and related pane
    e.target.parentElement.className += ' pane-active';
    document.getElementById(e.target.href.split('#')[1]).className += ' pane-active';
};

document.getElementById('tab-nav').addEventListener('click', tabClick, false);