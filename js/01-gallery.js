import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

const gallaryItems = galleryItems.map(
	({ preview, original, description }) =>
		`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
);
galleryEl.insertAdjacentHTML("afterbegin", gallaryItems.join(""));

galleryEl.addEventListener("click", hendleOpenImg);
function hendleOpenImg(event) {
	event.preventDefault();

	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
	instance.show();
}
