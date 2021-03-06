// Slideshow - Code assisted by W3 Schools

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide-opacity-off";
}

// Countdown Clock - Code assisted by W3 Schools

var countDownDate = new Date("July 15, 2020 23:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown-timer").innerHTML = days + "D |" + " " + hours + " " +  "H |"
  + " " + minutes + "M |" + " " + seconds + "S";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Offer has now finished!";
  }
}, 1000);

// Search Bar - Code assisted by W3 Schools

function searchBarFunction() {
  document.getElementById("searchBarDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchBarInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("searchBarDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}