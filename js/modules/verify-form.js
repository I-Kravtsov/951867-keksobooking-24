import { sendData } from './fetch.js';
import { showSuccessMessage, showErrorMessage } from './info-messages.js';
import { resetMap } from './map.js';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField = adForm.querySelector('#price');
const roomNumberField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const typeField = adForm.querySelector('#type');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');

const setCapacityFieldCustomValidity = () => {
  for(const option of capacityField.options) {
    if(option.selected) {
      if(option.disabled){
        capacityField.setCustomValidity('Данное значение недопустимо');
      }else {
        capacityField.setCustomValidity('');
      }
    }
    capacityField.reportValidity();
  }
};

const setCapacityFieldDisabled = () => {
  if (roomNumberField.value === '100') {
    for(const option of capacityField.options) {
      if(option.value !== '0') {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    }
  } else {
    for(const option of capacityField.options) {
      if(option.value > roomNumberField.value || option.value === '0') {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    }
  }
};

const setPriceFieldCustomValidity = () => {
  if (priceField.value <= 0) {
    priceField.setCustomValidity('Цена за ночь не может быть меньше или равна 0');
  } else if (priceField.value >= MAX_PRICE_VALUE) {
    priceField.setCustomValidity('Это слишком дорого, максимальная цена за ночь 1 000 000 рублей');
  } else if (Number(priceField.value) < Number(priceField.min)) {
    priceField.setCustomValidity(`Цена за ночь не может быть меньше ${priceField.min} рублей`);
  } else {
    priceField.setCustomValidity('');
  }

  priceField.reportValidity();
};

titleField.addEventListener('input', () => {
  const inputValueLength = titleField.value.length;
  if (inputValueLength === 0) {
    titleField.setCustomValidity('Это поле не может быть пустым');
  } else if (inputValueLength < MIN_TITLE_LENGTH) {
    titleField.setCustomValidity(`ЕщЁ ${MIN_TITLE_LENGTH - inputValueLength} симв.`);
  } else if (inputValueLength > MAX_TITLE_LENGTH) {
    titleField.setCustomValidity(`Уберите ${inputValueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});

priceField.addEventListener('input', () => {
  setPriceFieldCustomValidity();
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

roomNumberField.addEventListener('change', () => {
  setCapacityFieldDisabled();
  setCapacityFieldCustomValidity();
});

capacityField.addEventListener('change', () => {
  setCapacityFieldDisabled();
  setCapacityFieldCustomValidity();
});

typeField.addEventListener('change', () => {
  let minValue = 0;
  switch (typeField.value) {
    case 'flat' :
      minValue = 1000;
      break;
    case 'bungalow' :
      minValue = 0;
      break;
    case 'house' :
      minValue = 5000;
      break;
    case 'palace' :
      minValue = 10000;
      break;
    case 'hotel' :
      minValue = 3000;
      break;
    default :
      minValue = 33;
  }
  priceField.placeholder = minValue;
  priceField.min = minValue;
  setPriceFieldCustomValidity();
});

const clearForm = () => {
  adForm.reset();
  resetMap();
};

const resetButton = adForm.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(capacityField.value > roomNumberField.value){
    setCapacityFieldDisabled();
    setCapacityFieldCustomValidity();
  } else {
    sendData(
      () => {
        showSuccessMessage();
        clearForm();
      },
      () => {
        showErrorMessage();
      },
      new FormData(evt.target),
    );
  }

  capacityField.reportValidity();
});
