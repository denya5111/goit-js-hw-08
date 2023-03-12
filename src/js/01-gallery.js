// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

function createListItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" onclick="return false" style="display: block"/>
</a>
</div>`
    )
    .join('');
}

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createListItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
