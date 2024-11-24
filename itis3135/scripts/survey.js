const nameInput = document.getElementById('name');
const mascot = document.getElementById("mascot");
const fileUpload = document.getElementById("intro-image");
const uploadButton = document.getElementById('load-image');
const imageCaption = document.getElementById("caption");
const personalBG = document.getElementById("personal");
const professionalBG = document.getElementById("professional");
const academicBG = document.getElementById("academic");
const webDevBG = document.getElementById("web-dev");
const platform = document.getElementById("platform");
const classInput = document.getElementById("classes");
const additionalInfo = document.getElementById("additional");
const buttonNewClass = document.getElementById("new-class");
let classList = [];
const buttonSubmit = document.getElementById("submit");

// load image to viewport upon file upload and button click
let uploadUserImage = () => {
  let image = document.getElementById("intro-image").files[0];

  const imageUrl = URL.createObjectURL(image);
  let text = imageUrl;

  return text;
};

// retrieve current class input value and add to list of classes
classInput.addEventListener("keyup", () => {
  if (classInput.value.length !== 0) {
    buttonNewClass.style.backgroundColor = "var(--gray)";
  } else {
    buttonNewClass.style.backgroundColor = "#eeeeee";
  }
});

// add class to page and create new input element
const addNewClass = () => {
  // get input value
  const value = classInput.value;

  // add to page if value exists and is unique
  if (value.length > 0 && !classList.includes(value)) {
    classList.push(value);

    // create and style div for new class
    let classSection = document.createElement('div');
    classSection.style.padding = '5px';
    classSection.style.marginBottom = '5px';
    classSection.innerHTML = value;

    // add to page and reset input
    buttonNewClass.innerHTML = "Added!";
    classInput.value = '';
    buttonNewClass.style.backgroundColor = '#eeeeee';
    setTimeout(() => {
        // Restore the original text
        buttonNewClass.innerHTML = "Add";
    }, 2000);
  }
};

buttonNewClass.onclick = addNewClass;
const userIntroForm = document.getElementById("intro-form");
const resultSection = document.getElementById("intro-result");

userIntroForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(uploadUserImage());
  resultSection.innerHTML = `
    <h2>USER'S INTRODUCTION</h2>
    <section id="intro-centered">
        <h3 id="name-mascot">${nameInput.value + " | " + mascot.value}</h3>
        <img src="${uploadUserImage()}" alt="User uploaded image!">
        <caption id="image-caption">${imageCaption.value}</caption>
    </section>

    <ul>
        <li id="new-personal"><strong>Personal Background:</strong>${personalBG.value}</li>
        <li id="new-professional"><strong>Professional Background:</strong>${professionalBG.value}</li>
        <li id="new-academic"><strong>Academic Background:</strong>${academicBG.value}</li>
        <li id="webdev"><strong>Web Development Background:</strong>${webDevBG.value}</li>
        <li id="comp-platform"><strong>Primary Computer Platform:</strong>${platform.value}</li>
        <li><strong>Courses I’m Taking, and Why:</strong></li>
        <ul id="courses">
            <li>${classList[0]}</li>
        </ul>
    </ul>
    `;
});

const reloadPage = document.getElementById("reset-page");
reloadPage.addEventListener('click', () => {
  window.location.reload();
});
