import { fetchImages } from "./js/pixabay-api.js";
import { renderImages, clearGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "./css/styles.css"; // Стилі проєкту

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const loader = document.querySelector(".loader");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search term!" });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await fetchImages(query);
    renderImages(data.hits);
  } catch (error) {
    iziToast.error({ title: "Error", message: error.message });
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.classList.add("visible");
}

function hideLoader() {
  loader.classList.remove("visible");
}