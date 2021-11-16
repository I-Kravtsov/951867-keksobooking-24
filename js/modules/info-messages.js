const ALERT_SHOW_TIME = 5000;

const showSuccessMessage = () => {
  const successMessageTemplate = document
    .querySelector('#success')
    .content
    .querySelector('.success');
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const body = document.querySelector('body');
  body.appendChild(successMessageElement);
  const onSuccessEscKeydown = (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      closeSuccessPopup();
    }
  };
  function closeSuccessPopup () {
    successMessageElement.remove();
    document.removeEventListener('keydown', onSuccessEscKeydown);
  }
  successMessageElement.addEventListener('click', () => {
    closeSuccessPopup();
  });
  document.addEventListener('keydown', onSuccessEscKeydown);
};

const showErrorMessage = () => {
  const errorMessageTemplate = document
    .querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const body = document.querySelector('body');
  body.appendChild(errorMessageElement);
  const onErrorEscKeydown = (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      closeErrorPopup();
    }
  };
  function closeErrorPopup () {
    errorMessageElement.remove();
    document.removeEventListener('keydown', onErrorEscKeydown);
  }
  errorMessageElement.addEventListener('click', () => {
    closeErrorPopup();
  });
  document.addEventListener('keydown', onErrorEscKeydown);
};

const showLoadErrorMessage = () => {
  const loadErrorMessage = document.createElement('div');
  loadErrorMessage.style.width = '250px';
  loadErrorMessage.style.height = '50px';
  loadErrorMessage.style.backgroundColor = 'rgb(255, 0, 0, 0.5';
  loadErrorMessage.style.zIndex = '1000';
  loadErrorMessage.style.position = 'fixed';
  loadErrorMessage.style.top = 0;
  loadErrorMessage.style.right = 0;
  loadErrorMessage.style.fontSize = '14px';
  loadErrorMessage.style.fontColor = 'black';
  loadErrorMessage.style.display = 'flex';
  loadErrorMessage.style.justifyContent= 'center';
  loadErrorMessage.style.alignItems= 'center';
  loadErrorMessage.textContent = 'Ошибка загрузки данных';
  document.body.append(loadErrorMessage);
  setTimeout(() => {
    loadErrorMessage.remove();
  }, ALERT_SHOW_TIME);
};
export {showSuccessMessage};
export {showErrorMessage};
export {showLoadErrorMessage};

