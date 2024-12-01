const dateAttributes = new Date();
let dayOfWeek = dateAttributes.getDay();
const day = dateAttributes.getDate();
let month = dateAttributes.getMonth() + 1;
const year = dateAttributes.getFullYear();
let hours = dateAttributes.getHours();
let minutes = dateAttributes.getMinutes();
let beforeOrAfterNoon = "AM";

const currentTimeHeading = document.getElementById("time");
const nameInput = document.getElementById("name");
const feelingInput = document.getElementById("feeling");
const displayButton = document.getElementById("display");
const currentWelcomeHeading = document.getElementById("welcome");
const polygonInput = document.getElementById("polygon");
const alertButton = document.getElementById("alert");
const insultTheriButton = document.getElementById("insult-animal");
const insultUserButton = document.getElementById("insult-user");
const luckyButton = document.getElementById("lucky");
const jauntyButton = document.getElementById("jaunty");
const currentChangeHeading = document.getElementById("change");
let isJaunty = false;

// Determine the day of the week upon program start
switch (dayOfWeek) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Error.";
    break;
}

// Determine month names upon start of the program
switch (month) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    month = "Error.";
    break;
}

// Determine whether it is AM or PM for the text upon start of the program
if (hours > 12) {
  hours -= 12;
  beforeOrAfterNoon = "PM";
}

// Change the minute text depending on if the time is at one at XX:10 or less
if (minutes < 10) {
  minutes = minutes.toString().padStart(2, '0');
}

// Update the heading with the time and date upon page refresh
window.onload = function () {
  const timeHeading = document.createTextNode(`It is ${hours}:${minutes}${beforeOrAfterNoon} on ${dayOfWeek}, ${day} ${month}, ${year}`);
  currentTimeHeading.appendChild(timeHeading);
};

// Update the welcome heading depending on input and button click
// Can only be pressed once
displayButton.addEventListener('click', () => {
  const welcomeHeading = document.createTextNode(`Janky Tetra welcomes you, ${nameInput.value}! You are doing ${feelingInput.value}.`);
  currentWelcomeHeading.appendChild(welcomeHeading);
}), { once: true };

// Absolute value and round polygon input before displaying alert
Math.abs(polygonInput);
Math.round(polygonInput);

// Gives alert depending on the input of side number
alertButton.addEventListener('click', () => {
  console.log(polygonInput.value);
  switch (polygonInput.value) {
    case "0":
      alert("Error: zeros");
      break;
    case "1":
      alert("Henagon");
      break;
    case "2":
      alert("Digon");
      break;
    case "3":
      alert("Trigon");
      break;
    case "4":
      alert("Tetragon");
      break;
    case "5":
      alert("Pentagon");
      break;
    case "6":
      alert("Hexagon");
      break;
    case "7":
      alert("Heptagon");
      break;
    case "8":
      alert("Octagon");
      break;
    case "9":
      alert("Enneagon");
      break;
    case "10":
      alert("Decagon");
      break;
    default:
      alert("Error.");
      break;
  }
}, false);


// Four Animal Functions
insultTheriButton.addEventListener('click', function insultTheTheriocephalus() {
  currentChangeHeading.innerText = "";
  const changeHeading = document.createTextNode("This thing sucks!");
  currentChangeHeading.appendChild(changeHeading);
});

insultUserButton.addEventListener('click', function insultTheUser() {
  currentChangeHeading.innerText = "";
  const changeHeading = document.createTextNode("You suck!");
  currentChangeHeading.appendChild(changeHeading);
});

luckyButton.addEventListener('click', function feelingLucky() {
  currentChangeHeading.innerText = "";
  const changeHeading = document.createTextNode("It was in vain.");
  currentChangeHeading.appendChild(changeHeading);
});

jauntyButton.addEventListener('click', function feelingJaunty() {
  // Get all text nodes on the page
  const textNodes = document.querySelectorAll(".unity");

  // Iterate over each text node
  textNodes.forEach((node) => {
    const text = node.textContent;
    const words = text.split(/\s+/);

    // Replace each word with "jaunty"
    const newText = words.map(() => "jaunty").join(" ");

    // Update the text content of the node
    node.textContent = newText;

  });

  if (isJaunty) {
    window.location.reload();
  }

  isJaunty = !isJaunty;
});
