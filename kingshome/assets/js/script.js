'use strict';
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/* navbar toggle*/
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const searchBtn = document.getElementById("search-btn");
const searchDropdown = document.getElementById("search-dropdown");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/*close navbar when click on any navbar link*/
for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/* add event on all elements for toggling navbar*/
for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/* header active state*/
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

/* Automatically set the current date*/
const setCurrentDate = function () {
  const dateElements = document.querySelectorAll(".publish-date time");
  const currentDate = new Date();
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  dateElements.forEach(dateElement => {
    dateElement.textContent = formattedDate;
    dateElement.setAttribute("datetime", `${year}-${month}-${day}`);
  });
}

setCurrentDate();

/*Toggle search dropdown*/
searchBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  searchDropdown.classList.toggle("active");
  searchDropdown.style.display = searchDropdown.style.display === "block" ? "none" : "block";
});

// Close the dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (!searchDropdown.contains(event.target) && !searchBtn.contains(event.target)) {
    searchDropdown.style.display = "none";
  }
});
