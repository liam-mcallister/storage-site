// Back To Top Button
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


// FAQ Accordian
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