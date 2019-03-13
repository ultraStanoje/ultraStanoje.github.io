function getTextHeight() {
    setTimeout(
 function (){
  var button = document.getElementById("information-btn");
  var myHeight = document.documentElement.clientHeight;
  var myWidth = document.documentElement.clientWidth;
  var s2_textHeight = document.getElementById("aboutMe-text");
  console.log(button.offsetTop);
  buttonPosition = button.offsetTop + button.offsetHeight;
  s1Background = buttonPosition + 70;
  if(myHeight>buttonPosition){
    console.log(true);
    document.getElementById("introduction").style.height = "100vh";
    document.getElementById("about-text-h1").style.paddingTop = "0%";

  }else{
    console.log(false);
    document.getElementById("section-2").style.height = 0;
    document.getElementById("about-text-h1").style.paddingTop = "0%";
    document.getElementById("introduction").style.height = s1Background + "px"; 
    s2_textHeight.style.cssFloat = "right";
  }

  if(myHeight<700){
    document.getElementById("education").style.marginTop = "15%";
    document.getElementById("about").style.paddingBottom= "calc("+ s2_textHeight + " + 20px)";
  }
  else{
    document.getElementById("education").style.top = 0;
    document.getElementById("education").style.marginTop = "0%";
  }

  if(myHeight<710 && myWidth<1200){
    document.getElementById("education").style.marginTop = "45%";
  }else{
    document.getElementById("education").style.marginTop = "0%";
  }
},200);
}

window.onload = getTextHeight();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}