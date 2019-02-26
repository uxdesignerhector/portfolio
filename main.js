/* var prevScrollpos = window.pageYOffset;
var customPixel = 120;
window.onscroll = function() {
  if (prevScrollpos < customPixel) {
    document.getElementById("navbar").style.display = "static";
  } else {
    document.getElementById("navbar").style.display = "absolute";
  }
}
 */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("gototop").style.display = "block";
  } else {
    document.getElementById("gototop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
