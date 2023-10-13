let mybutton = document.getElementById("btn-back-to-top");
let header = document.getElementById("header-top-side");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    header.classList.add("add-shadow");
    // header.style.border = "1px solid red";

  } else {
    mybutton.style.display = "none";
    header.classList.remove("add-shadow");

  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  $('html, body').animate({
    scrollTop: 0
}, 200); 
  
}



