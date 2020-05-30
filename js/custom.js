
//TOP scrolling
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Senior College Filter
function getSeniors() {
var seniors = document.getElementById("seniorscollege");
var community = document.getElementById("community");
var proff = document.getElementById("professional");

if (seniors.style.display === "none") {
seniors.style.display = "block";
community.style.display = "none";
proff.style.display = "none";
} else {
seniors.style.display = "block";
community.style.display = "none";
proff.style.display = "none";
}
}

//Community College Filter
function getCommunity() {
	var seniors = document.getElementById("seniorscollege");
	var community = document.getElementById("community");
  var proff = document.getElementById("professional");

	if (community.style.display === "none") {
		seniors.style.display = "none";
		community.style.display = "block";
    proff.style.display = "none";
	} else {
		seniors.style.display = "none";
		community.style.display = "block";
    proff.style.display = "none";
	}
}

//Community College Filter
function getProffesional() {
	var seniors = document.getElementById("seniorscollege");
	var community = document.getElementById("community");
  var proff = document.getElementById("professional");

	if (community.style.display === "none") {
		seniors.style.display = "none";
		community.style.display = "none";
    proff.style.display = "block";
	} else {
		seniors.style.display = "none";
		community.style.display = "none";
    proff.style.display = "block";
	}
}

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

var options = {
  strings: ["resources", "assistance", "help", "support"],
  typeSpeed: 100,
  loop: true,
  backDelay: 2000,

}

var typed = new Typed("#typed", options);
