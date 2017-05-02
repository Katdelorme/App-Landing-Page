(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

(function() {
  var menu = document.querySelector(".menu-collapsed")

    document.querySelector(".switch").addEventListener( "click", function(e) {
      e.preventDefault();
      menu.classList.toggle('menu-expanded');
      });

    document.querySelectorAll(".menuLinks").addEventListener( "click", function(e) {
      menu.classList.remove('menu-expanded');
      menu.classList.add('menu-collapsed');
    });

})();

/*
var menu = document.querySelector('.menu-collapsed')
menu.classList.toggle('menu-expanded');*/
