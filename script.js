document.addEventListener("DOMContentLoaded", function () {


if (localStorage.getItem("scrollPosition")) {
    window.scrollTo(0, parseInt(localStorage.getItem("scrollPosition")));
}
if (window.location.hash) {
    history.replaceState({}, document.title, window.location.href.split('#')[0]);
}
window.addEventListener("scroll", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
});



    var loader  =   document.getElementById("loading");
      window.addEventListener("load", function(){
              loader.style.display = "none";
      })

var button = document.getElementById("tp-button");
var scrollingUp = false;

window.onscroll = function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 90 && !scrollingUp) {
    button.classList.add("slide-in");
    button.classList.remove("slide-out");
    button.style.display = "flex";
  } else if (scrollTop <= 90) {
    button.classList.remove("slide-in");
    scrollingUp = false;
    if (!button.classList.contains("slide-out")) {
      button.classList.add("slide-out");
    }
  } else {
    scrollingUp = true;
  }
};

ScrollReveal().reveal('.aboutme-main', {delay: 250});
ScrollReveal().reveal('.made-web-window', { interval: 200 });
ScrollReveal().reveal('.services-examples-card', { delay: 250 });

const targetElement = document.querySelector('.made');
const kolor1 = getComputedStyle(document.documentElement).getPropertyValue('--kolor1');
const kolor9 = getComputedStyle(document.documentElement).getPropertyValue('--kolor9');

window.addEventListener('scroll', () => {
    if (window.scrollY >= targetElement.offsetTop) {
        document.body.classList.add('change-background');
        document.body.style.backgroundColor = kolor9;
    } else {
        document.body.classList.remove('change-background');
        document.body.style.backgroundColor = kolor1;
    }

    if (window.scrollY >= targetElement.offsetTop + targetElement.clientHeight) {
        document.body.style.backgroundColor = kolor1;
    }
});


tippy('#made-web-windows-text-tippy', {
    content: "Zobacz stronę!",
    placement: 'bottom',
  });
  tippy('#tippy-footer', {
    content: "Zapisz się",
    placement: 'bottom',
  });





});

