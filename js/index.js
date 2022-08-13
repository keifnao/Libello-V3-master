const containerHide = document.querySelector(".title-wrapper .row")

scrollMove()

window.addEventListener("scroll", () => scrollMove())

function scrollMove() {
    containerHide.style.transform = `translateY(${window.scrollY}px)`
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}