document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;
    var menuLinks = document.querySelectorAll(".nav li a");
  
    menuLinks.forEach(function(link) {
      if (link.href === currentURL) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
