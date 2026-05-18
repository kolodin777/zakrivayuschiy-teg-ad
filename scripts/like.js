const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  };
});

likeButtonArray.forEach((button, index) => {
  button.onclick = (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  };
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

// Код для модального окна
const saveButton = document.querySelector('.save-button');
const dialog = document.getElementById('memory-dialog');
const closeButton = document.getElementById('close-dialog');

if (saveButton && dialog) {
  saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
  });
}

if (closeButton && dialog) {
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
  });
}

if (dialog) {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
