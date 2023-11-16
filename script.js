document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("scroll-to-top");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };

    window.scrollToTop = function () {
        scrollTo(document.documentElement, 0, 500); // Scroll to the top with a duration of 500 milliseconds
    };

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();
    }

    // Easing function for smooth scroll animation
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});

// Toggle share icons visibility
function toggleShareIcons() {
    var shareIcons = document.getElementById("floating-share-icons");
    shareIcons.classList.toggle("show");
}
