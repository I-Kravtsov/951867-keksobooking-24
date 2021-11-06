const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField = adForm.querySelector('#price');
const roomNumberField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
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
  if (priceField.value <= 0) {
    priceField.setCustomValidity('Цена не может быть отрицательной');
  } else if (priceField.value >= MAX_PRICE_VALUE) {
    priceField.setCustomValidity('Это слишком дорого, максимальная цена за ночь 1 000 000 рублей');
  } else {
    priceField.setCustomValidity('');
  }

  priceField.reportValidity();
});

roomNumberField.addEventListener('change', () => {
  setCapacityFieldDisabled();
  setCapacityFieldCustomValidity();
});

capacityField.addEventListener('change', () => {
  setCapacityFieldDisabled();
  setCapacityFieldCustomValidity();
});

adForm.addEventListener('submit', (evt) => {
  if(capacityField.value > roomNumberField.value){
    evt.preventDefault();
    setCapacityFieldDisabled();
    setCapacityFieldCustomValidity();
  }

  capacityField.reportValidity();
});
