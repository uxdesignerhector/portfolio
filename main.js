


window.onscroll = function() {
  scrollFunction()
};

window.onresize = function(){
  scrollFunction();
}


document.addEventListener("DOMContentLoaded",function(){
  projectCardCoverActivateTool.checker();
  contactForm.setUpEventListener();
  

  testimonialLang.getTestimonialText();
  

});

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


function scrollFunction() {
  scrollBarLowerPosition = window.pageYOffset+window.innerHeight-70;
  footerTopPosition = document.getElementById("footer").offsetTop;

  if (scrollBarLowerPosition > footerTopPosition) {
    document.getElementById("gototop").style.display = "block";
    document.getElementById("contactButton").style.display= "none";
  } else if (window.pageYOffset > 100 ){
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
    var contactMenuIcon = document.getElementById('contactButtonMenuIcon');

    contactButton.addEventListener("click", function(){
      contactForm.setupScrollTemporaryListener();
    });
    contactMenu.addEventListener("click", function(){
      contactForm.setupScrollTemporaryListener();
    });
    contactMenuIcon.addEventListener("click", function(){
      contactForm.setupScrollTemporaryListener()
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

  setupScrollTemporaryListener: function (){
  window.addEventListener('scroll', this.contactScrollingfunction(),false)
  window.removeEventListener('scroll', this.contactScrollingfunction, false);

  },

  contactScrollingfunction: function(){
    var isScrolling;
    window.clearTimeout( isScrolling );
    isScrolling = contactForm.setFocusCallback();
  },

  setFocusCallback: function() {  
    setTimeout(function() {
      contactForm.setFocusOnInputEmail();
      console.log("stop")
    }, 0);
    false;
  },

  setFocusOnInputEmail: function(){
    window.setTimeout(function (){
        document.getElementById('email').focus();
    }, 350);
    return false;
  }
  


}


var testimonialLang = {

  langChecker: function(){
  if(testimonialButtonText.innerText==='Switch to Spanish'){
    testimonialButton.onclick = function(){testimonialLang.setupSpanish()};
  } else {
    testimonialButton.onclick = function(){testimonialLang.setupEnglish()};
  }
  },



  getTestimonialText: function(){


    testimonialButton = document.getElementById('testiButton');
    testimonialButtonText = document.getElementById('testiButtonText');
    ruth = document.getElementById('testiRuth');
    alvaro = document.getElementById('testiAlvaro');
    analia = document.getElementById('testiAnalia');
    mauri = document.getElementById('testiMauri');
    nuria = document.getElementById('testiNuria');
    this.langChecker();
  },

  setupEnglish: function(){
/*     testimonialButton.removeEventListener('click',function(){testimonialLang.setupEnglish()}); */
    testimonialButtonText.innerText = 'Switch to Spanish';
    ruth.innerText = '"He faces projects with a lot of energy, creativity and searching for solutions, as well as, risky bets that makes proposals more attractive. He always faces work with a smile and a big effectiveness"';
    alvaro.innerText = '“Héctor anticipates himself to possible errors and problems and knows how to put a solution to them, he gets involved in projects and gives you a different point of view that you don’t expect, making you to face the project from other perspective”';
    mauri.innerText = '“I met Héctor at KSchool’s Master. The first day each one of us went up to the blackboard to introduce ourselves. Héctor was the first, and in 10 minutes of presentation he conquered us all. Without doubt he looks at things through a different lens.”' ;
    analia.innerText = '“I would like to highlight also his way of being, always gentle and with a smile, which makes the work team more pleasing and easy. Anyone that have the chance to know him will realise that Héctor always leaves a trace wherever he goes.”';
    nuria.innerText = '"I value positively his maturity, his know how to behave, his curiosity to learn and his culture, that it is above from the average of his generation. In addition, Héctor, has a keen sense of humour which makes coexistence with him very pleasant”';
    this.langChecker();
  },



  setupSpanish: function(){
/*     testimonialButton.removeEventListener('click',function(){testimonialLang.setupEnglish()}); */

    testimonialButtonText.innerText = 'Switch to English';
    ruth.innerText = '"Afronta los proyectos con gran energía, creatividad y buscando soluciones, así como, apuestas arriesgadas que hacen más atractivas las propuestas. Siempre se enfrenta al trabajo con una sonrisa y gran efectividad."';
    alvaro.innerText = '"Héctor se anticipa a posibles errores y problemas y sabe ponerles una solución, se implica en los proyectos y te da un punto de vista diferente que no esperas, haciéndote abordar el proyecto desde otra perspectiva"';
    mauri.innerText = '"Conocí a Héctor en el Máster de KSchool. El primer día cada uno de nosotros salió a la pizarra a presentarse. Héctor fue el primero, y con sus 10 minutos de presentación nos tuvo a todos conquistados. Sin duda ve las cosas de forma diferente al resto."' ;
    analia.innerText = '"Me gustaría destacar también su forma de ser, siempre amable y sonriente, lo cual hace mucho más agradable y fácil el trabajo en equipo. Cualquiera que tenga la oportunidad de conocerlo se dará cuenta que Héctor siempre deja huella allí donde vaya."';
    nuria.innerText = '"Valoro muy positivamente su madurez, su saber estar, su inquietud por aprender y su cultura, que está muy por encima de la media de su generación. Además, Héctor, tiene un fino sentido del humor que hacen muy agradable la convivencia con él"';
    this.langChecker();
  }

}

