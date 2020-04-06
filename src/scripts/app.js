/*------------------------------------Cookie Box----*/
(function () {
    if (!localStorage.getItem('cookieAccept')) {
        document.body.innerHTML += '\
		<div id="cookie" class="cookie">\
            <p>We use <a href="cookie.html">cookies</a></p>\
            <button id="cookieBtn" class="btn">OK</button>\
		</div>\
        ';

        function cookieClick(e) {
            e.preventDefault();
            document.getElementById('cookie').style.display = 'none';
            localStorage.setItem('cookieAccept', true);
        }

        document.getElementById('cookieBtn').addEventListener('click', cookieClick, false);
    }
})();



/*----------------------------Back To Top Button----*/
const btnToTop = document.getElementById('btn-to-top');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnToTop.style.display = 'block';
    } else {
        btnToTop.style.display = 'none';
    }
});

btnToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



/*---------------------------------FAQ Accordian----*/
const faqQuestion = document.querySelectorAll('.question');
const faqAnswer = document.querySelectorAll('.answer');

for (let i = 0; i < faqAnswer.length; i++) {
    faqAnswer[i].style.display = 'none';
}

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



/*-----------------------------------Google Maps----*/
function initMap() {
    const belfast = { lat: 54.607868, lng: -5.926437 };
    const map = new google.maps.Map(document.getElementById('contact-map'), {
        zoom: 15,
        center: belfast
    });
    const marker = new google.maps.Marker({ position: belfast, map: map });
};











/*------------------------------------Size Guide----*/
function tabClick(e) {
    let paneActive = document.querySelectorAll('.pane-active');
    for (let i = 0; i < paneActive.length; i++) {
        paneActive[i].className = paneActive[i].className.replace('pane-active', '');
    }
    e.target.parentElement.className += ' pane-active';
    document.getElementById(e.target.href.split('#')[1]).className += ' pane-active';
};

const tabNav = document.getElementById('tab-nav');
tabNav.addEventListener('click', tabClick, false);



/*-------------------------Quote Form Validation----*/