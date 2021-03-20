(function () {
  enableFadeInAnimation();
  enableScrollAnimation();
  enableStickyNav();

  /**
   * Hamburger Click - Menubar show/hide
   */
  $(".mobile-nav-icon").click(function (e) {
    var nav = $(".main-nav");
    var icon = $(".mobile-nav-icon").find("ion-icon");
    if ($(icon).attr("name") == "list-circle-outline") {
      icon.attr("name", "close-outline");
    } else {
      icon.attr("name", "list-circle-outline");
    }
    nav.slideToggle(200);
  });
})();

/***
 *
 * Code for scroll animation
 */
function enableScrollAnimation() {
  var elements = document.querySelectorAll(".animate");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = "transition-animation 0.5s ease-in-out";
      } else {
        entry.target.style.animation = "none";
      }
    });
  });

  elements.forEach(function (element) {
    observer.observe(element);
  });
}

// Fade in animation on scroll
function enableFadeInAnimation() {
  var fadeElements = document.querySelectorAll(".fade-in-animate");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = "fade-in 0.8s ease-in-out";
      } else {
        entry.target.style.animation = "none";
      }
    });
  });

  fadeElements.forEach(function (element) {
    observer.observe(element);
  });
}

/**
 * Sticky navbar on scroll
 */

window.onscroll = function () {
  enableStickyNav();
};

function enableStickyNav() {
  var header = document.querySelector("nav");
  var featuresSection = document.querySelector("#features");
  //var stickyOffset = header.offsetTop;
  var featuresOffset = featuresSection.offsetTop;
  if (window.pageYOffset > featuresOffset - 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  //    var navButton = document.querySelector(".mobile-nav-icon");
  //   var mainNav = document.querySelector(".main-nav");

  //   navButton.addEventListener("click", showNavbar);

  //   function showNavbar() {
  //     var show = toggler();
  //     if (show) {
  //       mainNav.classList.add("showNavbar");
  //     } else {
  //       mainNav.classList.remove("showNavbar");
  //     }
  //   }
}

var toggler = (function (n) {
  return function () {
    var isOn = false;
    n += 1;
    if (n % 2 === 1) {
      isOn = true;
    }
    return isOn;
  };
})(0);
