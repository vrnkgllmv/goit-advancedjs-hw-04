import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${img.likes}</p>
        <p><b>Views</b> ${img.views}</p>
        <p><b>Comments</b> ${img.comments}</p>
        <p><b>Downloads</b> ${img.downloads}</p>
      </div>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

export function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}

export function showLoadMoreButton() {
  document.querySelector('.load-more-btn').style.display = 'block';
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more-btn').style.display = 'none';
}
