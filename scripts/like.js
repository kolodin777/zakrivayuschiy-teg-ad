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
      const textSpan = button.querySelector('.button__text');
      if ([...heart.classList].includes('is-liked')) {
        setTimeout(() => {
          if (textSpan) textSpan.textContent = 'Unlike';
        }, 500);
      } else {
        setTimeout(() => {
          if (textSpan) textSpan.textContent = 'Like';
        }, 500);
      }
    }

    // МОДАЛЬНОЕ ОКНО
    const saveButton = document.querySelector('.save-button');
    const dialog = document.getElementById('memory-dialog');
    const closeButton = document.getElementById('close-dialog');

    if (saveButton && dialog) {
      saveButton.onclick = (event) => {
        event.preventDefault();
        dialog.showModal();
      };
    }

    if (closeButton && dialog) {
      closeButton.onclick = (event) => {
        event.preventDefault();
        dialog.close();
      };
    }

    if (dialog) {
      dialog.onclick = (event) => {
        if (event.target === dialog) {
          dialog.close();
        }
      };
    }
