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



function initNav(){
  // make drop-downs work properly with touchscreens by preventing instant hover-click
  $("#home").each(function(){
    var li = $(this);
    li.mouseover(function(){
      // store time of hover event
      li.data( 'hoverTime', new Date().getTime() );
    });
    li.children('a').click(function(){
      // only allow click if at least 50ms has elapsed since hover
      return ( new Date().getTime() - li.data('hoverTime') ) > 50;
    });
  });
}
