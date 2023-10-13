document.addEventListener("DOMContentLoaded", function () {
  handleLocalStorageScroll();
  handleWindowLoad();
  handleScrollEffects();
  handleTippyTooltips();
});

function handleLocalStorageScroll() {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
  }

  if (window.location.hash) {
      history.replaceState({}, document.title, window.location.href.split('#')[0]);
  }

  window.addEventListener("scroll", function () {
      localStorage.setItem("scrollPosition", window.scrollY);
  });
}
document.addEventListener("DOMContentLoaded", function() {
    var autoplayVideos = document.querySelectorAll("video[autoplay]");
  
    autoplayVideos.forEach(function(video) {
      video.play();
    });
  });
function handleWindowLoad() {
  const loader = document.getElementById("loading");
  window.addEventListener("load", function () {
      loader.style.display = "none";
  });
}

function handleScrollEffects() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 850) {
      ScrollReveal().reveal('.aboutme-main', { delay: 250 });
      ScrollReveal().reveal('.made-web-window', { interval: 200 });
      ScrollReveal().reveal('.services-examples-card', { delay: 250 });
  }

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
}

function handleTippyTooltips() {
  const tippyOptions = {
      placement: 'bottom',
  };

  tippy('#made-web-windows-text-tippy', {
      content: "Zobacz stronę!",
      placement: 'bottom',
  });

  tippy('#tippy-footer', {
      content: "Zapisz się",
      placement: 'bottom',
  });
}
