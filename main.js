window.onscroll = function () {
  scrollFunction()
};

window.onresize = function () {
  scrollFunction();
}




document.addEventListener("DOMContentLoaded", function () {
  checkProject.init();
  projectCardCoverActivateTool.checker();
  contactForm.setUpEventListener();
  testimonialLang.getTestimonialText();
  browser();

  menu2.handler();
  let botonContacto = document.getElementById('contactButton');
  botonContacto.onclick = function () {
    replaceHistory('#contact')
  }
  let botonContactoMenu = document.getElementById('contactMenuLink');
  botonContactoMenu.onclick = function () {
    replaceHistory('#contact')
  }
  try {
    var botonSkipToUxProjects = document.getElementById('skipToUxProjectsButton');
    botonSkipToUxProjects.onclick = function () {
      replaceHistory('#ux_projects')
    }
  } catch {
    if (botonSkipToUxProjects == null) {
      return false
    } else {
      console.log(err);
    }
  }

  try {
    let botonIconSkipToIntro = document.getElementById('iconSkipToIntro');
    botonIconSkipToIntro.onclick = function () {
      replaceHistory('#intro')
    }
  } catch {
    if (botonIconSkipToIntro == null) {
      return false
    } else {
      console.log(err)
    }
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function scrollFunction() {
  scrollBarLowerPosition = window.pageYOffset + window.innerHeight - 70;
  footerTopPosition = document.getElementById("footer").offsetTop;

  if (scrollBarLowerPosition > footerTopPosition) {
    document.getElementById("contactButton").style.display = "none";
  } else if (window.pageYOffset > 100) {
    document.getElementById("gototop").style.display = "block";
    document.getElementById("contactButton").style.display = "block";
    document.getElementById("theme").style.display = "block";
  } else {
    document.getElementById("gototop").style.display = "none";
    document.getElementById("contactButton").style.display = "none";
    document.getElementById("theme").style.display = "none";
  }
}
var indexFileName = location.pathname;
var fileName = location.pathname.split("/").slice(-1);
var urlProjectCard = document.getElementsByClassName("project-card__body-text-url");
var viewedCheck = document.getElementsByClassName("project-card__check--no-active");

var projectCardCoverActivateTool = {
  checker: function () {
    for (i = 0; i < urlProjectCard.length; i++) {
      if (fileName == urlProjectCard[i].getAttribute("href")) {
        var projectCardHeaderCoverDiv = urlProjectCard[i].parentElement.parentElement.parentElement.children[0].children[1];
        var projectCArdHeaderCoverWave = urlProjectCard[i].parentElement.parentElement.parentElement.firstElementChild.children[2];
        var idAttributeSection = urlProjectCard[i].parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        var projectCardHeaderImage = urlProjectCard[i].parentElement.parentElement.parentElement.children[0].children[3].firstChild;
        projectCardHeaderImage.className = "project-card__header-img project-card__header-img--inactive"

        if (idAttributeSection == "ux_projects") {
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


  changeClassesAndUrl: function (i) {
    urlProjectCard[i].classList.add("project-card__body-text-url--no-active");
    urlProjectCard[i].firstElementChild.classList.add("project-card__body-text-title--no-active");
    urlProjectCard[i].removeAttribute("href");
    urlProjectCard[i + 1].removeAttribute("href");
    urlProjectCard[i + 1].firstElementChild.firstElementChild.innerHTML = "<p>You are here!</p>";
    urlProjectCard[i + 1].firstElementChild.classList.add("project-card__button-card--no-active");
  }
}

var checkProject = {

  init: function () {
    if (viewedCheck.length > 0) {
      if (indexFileName == "/portfolio/") {
        this.setUpChecks()
      } else {
        this.setCookie();
      }
    }
  },

  setCookie: function () {

    var alreadyViewed = this.getCookieArray();
    if (alreadyViewed.length == 0) {
      document.cookie = "viewed=" + fileName + "; expires=Thu, 18 Dec 2020 12:00:00 UTC";
      this.setUpChecks();
    } else {
      if (alreadyViewed.includes(fileName)) {
        this.setUpChecks();
      } else {
        document.cookie = "viewed=" + alreadyViewed.toString() + "," + fileName + "; expires=Thu, 18 Dec 2020 12:00:00 UTC";
        this.setUpChecks();
      }
    }
  },


  getCookieArray: function () {
    var ca = document.cookie.split(';');
    var visited = "";
    for (var i = 0; i < ca.length; i++) {
      ca[i] = ca[i].trim();
      if (ca[i].includes("viewed")) {
        visited = ca[i]
        visited = visited.split("=").pop()
      }
    }
    return visited

  },

  setUpChecks: function () {
    var alreadyViewed = this.getCookieArray();
    if (alreadyViewed.length == 0) {
      console.log("Nothing to display")
    } else {
      var pat = alreadyViewed.split(",")
      var otherUrlProjectCard = ["asos_app_case_study.html", "asos_web_case_study.html", "ux-area-6.html", "working_at_f10.html", "LNL.html", "working_at_magma.html"];
      for (var infer = 0; infer < otherUrlProjectCard.length; infer++) {
        var href = otherUrlProjectCard[infer];
        for (var i = 0; i < pat.length; i++) {
          if (pat[i] == href) {
            viewedCheck[infer].classList.add("project-card__check--active");
          }
        }
      }
    }
  }
}



var contactForm = {

  setUpEventListener: function () {
    var clearTextAreaButton = document.getElementById("contactFormButtonClearText");
    clearTextAreaButton.addEventListener("click", this.clearMesagge);

    var contactButton = document.getElementById('contactButton');
    var contactMenu = document.getElementById('contactMenuLink');
    var contactMenuIcon = document.getElementById('contactButtonMenuIcon');

    contactButton.addEventListener("click", function () {
      contactForm.setupScrollTemporaryListener();
    });
    contactMenu.addEventListener("click", function () {
      contactForm.setupScrollTemporaryListener();
    });
    contactMenuIcon.addEventListener("click", function () {
      contactForm.setupScrollTemporaryListener()
    });

    inputField = document.querySelectorAll(".contactFormInput");
    inputField.forEach(function (element, index) {
      element.onfocus = function () {
        contactForm.activateLabel(index)
      };
      element.onblur = function () {
        contactForm.deactivateLabel(index)
      };
    });
  },

  clearMesagge: function () {
    var contactFormTextArea = document.getElementById("contactFormTextArea");
    contactFormTextArea.value = "";
  },

  activateLabel: function (position) {
    inputField[position].previousElementSibling.classList.add('contact-form__label--active');
  },

  deactivateLabel: function (position) {
    inputField[position].previousElementSibling.classList.remove('contact-form__label--active');
  },

  setupScrollTemporaryListener: function () {
    window.addEventListener('scroll', this.contactScrollingfunction(), false)
    window.removeEventListener('scroll', this.contactScrollingfunction, false);

  },

  contactScrollingfunction: function () {
    var isScrolling;
    window.clearTimeout(isScrolling);
    isScrolling = contactForm.setFocusCallback();
  },

  setFocusCallback: function () {
    setTimeout(function () {
      contactForm.setFocusOnInputEmail();
    }, 0);
    false;
  },

  setFocusOnInputEmail: function () {
    window.setTimeout(function () {
      document.getElementById('email').focus();
    }, 350);
    return false;
  }



}

function callBack() {
  bannerBackground.changer();
}

var imgSet = ['url("img/home_header_background.jpg")', 'url("img/home_header_background1.jpg")'];

var bannerBackground = {

  prepare: function () {
    background = document.getElementById('img-banner-div').style;
    background.backgroundImage = imgSet[0];
    this.changer();
  },

  changer: function () {

    if (background.backgroundImage == imgSet[0]) {
      background.backgroundImage = imgSet[1];
      setTimeout(callBack, 15000);
    } else {
      background.backgroundImage = imgSet[0];
      setTimeout(callBack, 15000);
    }
  }

}




var testimonialLang = {

  langChecker: function () {

    if (testimonialButtonText.innerText === 'Switch to Spanish') {
      testimonialButton.onclick = function () {
        testimonialLang.setupSpanish()
      };
    } else {
      testimonialButton.onclick = function () {
        testimonialLang.setupEnglish()
      };
    }
  },



  getTestimonialText: function () {


    testimonialButton = document.getElementById('testiButton');
    testimonialButtonText = document.getElementById('testiButtonText');
    ruth = document.getElementById('testiRuth');
    alvaro = document.getElementById('testiAlvaro');
    analia = document.getElementById('testiAnalia');
    mauri = document.getElementById('testiMauri');
    nuria = document.getElementById('testiNuria');
    if (testimonialButtonText == null) {
      return false
    } else {
      this.langChecker();
    }
  },

  setupEnglish: function () {

    testimonialButtonText.innerText = 'Switch to Spanish';
    ruth.innerText = '"He faces projects with a lot of energy, creativity and searching for solutions, as well as, risky bets that makes proposals more attractive. He always faces work with a smile and a big effectiveness"';
    alvaro.innerText = '“Héctor anticipates himself to possible errors and problems and knows how to put a solution to them, he gets involved in projects and gives you a different point of view that you don’t expect, making you to face the project from other perspective”';
    mauri.innerText = '“I met Héctor at KSchool’s Master. The first day each one of us went up to the blackboard to introduce ourselves. Héctor was the first, and in 10 minutes of presentation he conquered us all. Without doubt he looks at things through a different lens.”';
    analia.innerText = '“I would like to highlight also his way of being, always gentle and with a smile, which makes the work team more pleasing and easy. Anyone that have the chance to know him will realise that Héctor always leaves a trace wherever he goes.”';
    nuria.innerText = '"I value positively his maturity, his know how to behave, his curiosity to learn and his culture, that it is above from the average of his generation. In addition, Héctor, has a keen sense of humour which makes coexistence with him very pleasant”';
    this.langChecker();
  },



  setupSpanish: function () {


    testimonialButtonText.innerText = 'Switch to English';
    ruth.innerText = '"Afronta los proyectos con gran energía, creatividad y buscando soluciones, así como, apuestas arriesgadas que hacen más atractivas las propuestas. Siempre se enfrenta al trabajo con una sonrisa y gran efectividad."';
    alvaro.innerText = '"Héctor se anticipa a posibles errores y problemas y sabe ponerles una solución, se implica en los proyectos y te da un punto de vista diferente que no esperas, haciéndote abordar el proyecto desde otra perspectiva"';
    mauri.innerText = '"Conocí a Héctor en el Máster de KSchool. El primer día cada uno de nosotros salió a la pizarra a presentarse. Héctor fue el primero, y con sus 10 minutos de presentación nos tuvo a todos conquistados. Sin duda ve las cosas de forma diferente al resto."';
    analia.innerText = '"Me gustaría destacar también su forma de ser, siempre amable y sonriente, lo cual hace mucho más agradable y fácil el trabajo en equipo. Cualquiera que tenga la oportunidad de conocerlo se dará cuenta que Héctor siempre deja huella allí donde vaya."';
    nuria.innerText = '"Valoro muy positivamente su madurez, su saber estar, su inquietud por aprender y su cultura, que está muy por encima de la media de su generación. Además, Héctor, tiene un fino sentido del humor que hacen muy agradable la convivencia con él"';
    this.langChecker();
  }

}

var theme = {

  prepareButton: function () {
    themebutton = document.getElementById("theme");
    var theme = document.cookie.includes("dark");
    if (theme) {
      this.setLight();
    } else {
      this.setDark();
    }
  },


  setDark: function () {
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    this.setUpInterface();


  },

  setLight: function () {
    document.cookie = "theme=light; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    this.setUpInterface();

  },

  setUpInterface: function () {

    var theme = document.cookie.split(";");
    for (var i = 0; i < theme.length; i++) {
      if (theme[i].trim().includes("theme")) {
        if (theme[i].includes("dark")) {
          this.darkMode();
          themebutton = document.getElementById("theme");
          themebutton.value = "light";
          themebutton.title = "Changes theme to Light mode";
        } else {
          this.lightMode();
          themebutton = document.getElementById("theme");
          themebutton.value = "dark";
          themebutton.title = "Changes theme to Dark mode";
        }
      } else {
        
      }

    }
  },

  darkMode: function () {
    document.documentElement.style.setProperty('--main-bg-color', '#100e17');
    document.documentElement.style.setProperty('--main-txt-color', '#fffffa');
    document.documentElement.style.setProperty('--main-footer-bg-color', '#09080d');
    document.documentElement.style.setProperty('--main-project-card-bg-color', '#17141d');
    document.documentElement.style.setProperty('--main-project-button-bg-color', '#281d25');
    document.documentElement.style.setProperty('--project-button-color--pink', '#e48698');
    document.documentElement.style.setProperty('--project-button-color--green', '#4da27a');
    document.documentElement.style.setProperty('--h3-main-color', '#7c7c7c');
    document.documentElement.style.setProperty('--main-icon-color', '#fffffa');
    document.documentElement.style.setProperty('--main-nav-border-transprarent', '#fffffa');
    document.documentElement.style.setProperty('--main-wraper-color', 'none');

  },

  lightMode: function () {
    document.documentElement.style.setProperty('--main-bg-color', '#fffffa');
    document.documentElement.style.setProperty('--main-txt-color', 'black');
    document.documentElement.style.setProperty('--main-footer-bg-color', '#2e4052');
    document.documentElement.style.setProperty('--main-project-card-bg-color', '#fffffa');
    document.documentElement.style.setProperty('--main-project-button-bg-color', '#fffffa');
    document.documentElement.style.setProperty('--project-button-color--pink', '#b3001b');
    document.documentElement.style.setProperty('--project-button-color--green', '#343e3d');
    document.documentElement.style.setProperty('--h3-main-color', '#3a3a3a');
    document.documentElement.style.setProperty('--main-icon-color', 'black');
    document.documentElement.style.setProperty('--main-nav-border-transprarent', '#00000000');
    document.documentElement.style.setProperty('--main-wraper-color', 'black');
  }
}



var menu2 = {
  handler: function () {
    var menuUX = document.getElementById('menuUX');
    var menuProjects = document.getElementById('menuProjects');
    var projectsLeftOriginValue = window.getComputedStyle(menuProjects).left;
    var reset = function () {
      menuProjects.removeAttribute('style');
    }
    window.onresize = reset;

    menuUX.addEventListener("mouseenter", function () {
      menuProjects.style.left = ('calc(100% - 200px)');
    })

    menuUX.addEventListener("mouseleave", function () {
      menuProjects.style.left = projectsLeftOriginValue;
      reset();
    })
  }
}

function browser() {
  var navBrowser = window.navigator.vendor;

  if (navBrowser == "Google Inc.") {
    setTimeout(callbackBannerBackground, 15000);
  }
}

function callbackBannerBackground() {
  bannerBackground.prepare();

}

/* Get the links and prevents them setting the url hash at the history */

function replaceHistory(urlHash) {
  window.location.replace(urlHash);
}

theme.setUpInterface();