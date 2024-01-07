// ScrollReveal
ScrollReveal({
        reset: true,
        distance: '30px',
        duration: 1500,
        delay: 100
    });

ScrollReveal().reveal('.scroll-reveal',{delay: 5});
// End ScrollReveal


// page preloader
var loader = document.getElementById("loader");

window.addEventListener("load",function(){
    loader.style.display = "none";
});
// end page preloader


// Scanner link
function enable()
{
    document.getElementById("btn").enable = true;
}
function disable()
{
    document.getElementById("btn").disable = false;
}