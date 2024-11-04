
// Back to Top Button Script
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    document.getElementById("backToTopBtn").style.display = window.pageYOffset > 300 ? "block" : "none";
}
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}