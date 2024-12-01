// script.js
// document.addEventListener("DOMContentLoaded", () => {
//   // Fetch JSON data
//   const navHeader = document.getElementById("headernav");

//   fetch("./components/navbar.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(navHeader);

//       data.forEach((post) => {
//         navHeader.insertAdjacentHTML('beforeend', `<a href="${post.link}"><button >${post.text}</button></a>`);
//       });
//     })
//     .catch((error) => console.error("Error fetching menu:", error));
// });

let pageArray = [];
const navHeader = document.getElementById("headernav");

$.ajax({
  method: 'GET',
  url: './components/navbar.json',
  success: function (response) {
    pageArray = response;

    response.forEach((post) => {
      navHeader.insertAdjacentHTML('beforeend', `<a href="${post.link}"><button >${post.text}</button></a>`);
    });
  }
});
