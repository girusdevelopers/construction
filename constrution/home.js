document.addEventListener("DOMContentLoaded", function () {
    var mainBox = document.querySelector('.main-box');
    var mainBox = document.querySelector('.image-box');

    function handleScroll() {
        var scrollPosition = window.scrollY;
        var elementPosition = mainBox.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 1.5) {
            mainBox.style.opacity = 1;
            mainBox.style.transform = 'translateY(0)';
        }
    }

    window.addEventListener('scroll', handleScroll);
});