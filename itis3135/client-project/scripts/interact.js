const body = document.querySelector("body");


body.addEventListener('click', (event) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("spark");
  body.appendChild(sparkle);

  sparkle.style.top = (event.clientY - body.offsetTop) + 'px';
  sparkle.style.left = (event.clientX - body.offsetLeft) + 'px';
  sparkle.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)"

  for (let i = 0; i <= 7; i++) {
    let span = document.createElement("span");
    span.style.transform = "rotate(" + (i * 45) + "deg)";
    sparkle.appendChild(span);
  }

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

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
