const name = document.getElementById('name');
const mascot = document.getElementById("mascot");
const fileUpload = document.getElementById("intro-image");
const uploadButton = document.getElementById('load-image')
const imageCaption = document.getElementById("caption");
const personalBG = document.getElementById("personal");
const professionalBG = document.getElementById("professional");
const academicBG = document.getElementById("academic");
const webDevBG = document.getElementById("web-dev");
const currentClasses = document.getElementById("classes");
const additionalInfo = document.getElementById("additional");
const buttonNewClass = document.getElementById("new-class");
let classList = [];

function loadImage() {
  let image = document.getElementById("introImage").files[0];

  const imageUrl = URL.createObjectURL(image);
  let text = "<img src=\"" + imageUrl + "\" >";

  document.getElementById('user-intro').innerHTML += text;
}

uploadButton.addEventListener('click', loadImage());
