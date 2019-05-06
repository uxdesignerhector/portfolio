window.onscroll = function() {scrollFunction()};
document.addEventListener("DOMContentLoaded",function(){
  projectCardCoverActivateTool.checker();
  contactForm.setUpEventListener();
});

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("gototop").style.display = "block";
    document.getElementById("contactButton").style.display= "block";
  } else {
    document.getElementById("gototop").style.display = "none";
    document.getElementById("contactButton").style.display= "none";
  }


}

var fileName = location.pathname.split("/").slice(-1);
var urlProjectCard = document.getElementsByClassName("project-card__body-text-url");


var projectCardCoverActivateTool = {
   checker: function() {
     for (i=0; i < urlProjectCard.length; i++){
       if( fileName == urlProjectCard[i].getAttribute("href")){
         var projectCardHeaderCoverDiv = urlProjectCard[i].parentElement.parentElement.parentElement.children[0].children[0];
         var projectCArdHeaderCoverWave = urlProjectCard[i].parentElement.parentElement.parentElement.firstElementChild.children[1];
         var idAttributeSection = urlProjectCard[i].parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
         if (idAttributeSection == "ux_projects"){
          projectCArdHeaderCoverWave.className = "project-card__header-cover-wave--active";
          projectCardHeaderCoverDiv.className = "project-card__header-cover--active project-card__header-cover--active--pink";
           this.changeClassesAndUrl(i);
           break;
          } else {
            projectCArdHeaderCoverWave.className = "project-card__header-cover-wave--active";
            projectCardHeaderCoverDiv.className = "project-card__header-cover--active project-card__header-cover--active--green";
            this.changeClassesAndUrl(i);
          break;
        }
      }
    }
  },


  changeClassesAndUrl: function(i){
    urlProjectCard[i].classList.add("project-card__body-text-url--no-active");
    urlProjectCard[i].firstElementChild.classList.add("project-card__body-text-title--no-active");
    urlProjectCard[i].removeAttribute("href");
    urlProjectCard[i+1].removeAttribute("href");
    urlProjectCard[i+1].firstElementChild.firstElementChild.innerHTML="<p>You are here!</p>";
    urlProjectCard[i+1].firstElementChild.classList.add("project-card__button-card--no-active");
  }
}


var contactForm = {
  
  setUpEventListener: function(){
    var clearTextAreaButton = document.getElementById("contactFormButtonClearText");
    clearTextAreaButton.addEventListener("click", this.clearMesagge);

    var contactButton = document.getElementById('contactButton');
    var contactMenu = document.getElementById('contactMenuLink');
    contactButton.addEventListener("click", function(){
      contactForm.setFocusOnInputEmail()
    });
    contactMenu.addEventListener("click", function(){
      contactForm.setFocusOnInputEmail()
    });
    
    inputField = document.querySelectorAll(".contactFormInput");
    inputField.forEach(function (element, index){
      element.onfocus = function(){contactForm.activateLabel(index)};
      element.onblur = function(){contactForm.deactivateLabel(index)};
    });
  },
  
  clearMesagge: function(){
    var contactFormTextArea = document.getElementById("contactFormTextArea");
    contactFormTextArea.value="";
  },

  activateLabel: function(position){
    inputField[position].previousElementSibling.classList.add('contact-form__label--active');
  },

  deactivateLabel: function(position){
    inputField[position].previousElementSibling.classList.remove('contact-form__label--active');
  },

  setFocusOnInputEmail: function (){
    window.setTimeout(function ()
    {
        document.getElementById('email').focus();
    }, 1);
    return false;
  }

}

