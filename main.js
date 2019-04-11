window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("gototop").style.display = "block";
    document.getElementById("gotobottom").style.display= "block";
  } else {
    document.getElementById("gototop").style.display = "none";
    document.getElementById("gotobottom").style.display= "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 