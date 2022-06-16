import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

const gallaryItems = galleryItems.map(
	({ preview, original, description }) =>
		`<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
    />
  </a>`
);
galleryEl.insertAdjacentHTML("afterbegin", gallaryItems.join(""));

let gallery = new SimpleLightbox(".gallery a", {
	captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});

gallery.on("error.simplelightbox", function (e) {
	console.log(e);
});
