let btnToTop = document.getElementById('btn-to-top');

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