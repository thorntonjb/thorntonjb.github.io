const slideImages = document.getElementsByClassName("demo");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let slideIndex = 1;
showSlides(slideIndex);

prevButton.addEventListener('click', plusSlides(-1));
nextButton.addEventListener('click', plusSlides(1));

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
