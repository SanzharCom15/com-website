// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.background= "rgba(0,0,0,0.9)";
  } else {
    document.getElementById("navbar").style.background= "transparent";
  }
}
