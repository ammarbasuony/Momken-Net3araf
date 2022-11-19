import { months, governorates, gender } from "./data-sets.js";

// DOM Elements
const searchForm = document.querySelector(".search form");
const searchInput = document.querySelector(".search form input");
const searchBtn = document.querySelector(".search form button");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value;

  console.log(searchValue);
});
