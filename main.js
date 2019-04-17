window.onscroll = function() {scrollFunction()};
document.addEventListener("DOMContentLoaded",function(){
  projectCardCoverActivateTool.consola();
});

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("gototop").style.display = "block";
    document.getElementById("gotobottom").style.display= "block";
  } else {
    document.getElementById("gototop").style.display = "none";
    document.getElementById("gotobottom").style.display= "none";
  }
}

var fileName = location.pathname.split("/").slice(-1);
var urlProjectCard = document.getElementsByClassName("project-card__body-text-url");
//debugger


var projectCardCoverActivateTool = {
   consola: function() {
     for (i=0; i < urlProjectCard.length; i++){
       if( fileName == urlProjectCard[i].getAttribute("href")){
<<<<<<< HEAD
=======
         console.log ("es igual");
>>>>>>> 13e40487b0199286da141c3297f26c1fb1e84c0e
         var projectCardHeaderCoverDiv = urlProjectCard[i].parentElement.parentElement.parentElement.children[0].children[0];
         var idAttributeSection = urlProjectCard[i].parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
         if (idAttributeSection=="ux_projects"){
           projectCardHeaderCoverDiv.className = "project-card__header-cover--active project-card__header-cover--active--pink";
           break;
          } else {
            projectCardHeaderCoverDiv.className = "project-card__header-cover--active project-card__header-cover--active--green";
          break;
        }
      }
    }
  },
}