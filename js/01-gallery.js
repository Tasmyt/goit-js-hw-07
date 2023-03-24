import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ListImage = document.querySelector(".gallery");
const cardImages = galleryCardsMarkup(galleryItems);
ListImage.insertAdjacentHTML("beforeend", cardImages);

ListImage.addEventListener("click", onImageClick);

function galleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class='gallery__link' href = '${original}' target='_self'>
            <img
                class="gallery__image"
                src= "${preview}" 
                data-source="${original}" 
                alt = '${description}' /> 
        </a>
        </li>`;
    })
    .join("");
}

function onImageClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImage = evt.target.dataset.source;
  evt.preventDefault();
  const instance = basicLightbox.create(`
	<img
                class="gallery__image"
                src= "${originalImage}" 
                >
`);

  instance.show();
}

console.log(galleryItems);
