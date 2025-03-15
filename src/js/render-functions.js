import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  clearGallery();
  if (images.length === 0) {
    throw new Error("No images found");
  }

  const markup = images
    .map(
      (image) => `
    <a class="gallery-item" href="${image.largeImageURL}">
      <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      <div class="image-info">
        <p><strong>Likes:</strong> ${image.likes}</p>
        <p><strong>Views:</strong> ${image.views}</p>
        <p><strong>Comments:</strong> ${image.comments}</p>
        <p><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </a>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  refreshLightbox();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

let lightbox = new SimpleLightbox(".gallery a");

function refreshLightbox() {
  lightbox.refresh();
}