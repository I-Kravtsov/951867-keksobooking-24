const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const setInactivform = (form, disableClass, state) => {
  const activeElements = form.children;
  if (state === 'active') {
    form.classList.remove(disableClass);
    for (const element of activeElements) {
      element.disabled = false;
    }
  } else {
    form.classList.add(disableClass);
    for (const element of activeElements) {
      element.disabled = true;
    }
  }
};


const setInactivState = (state) => {
  setInactivform(adForm, 'ad-form--disabled', state);
  setInactivform(mapFilter, 'map__filters--disabled', state);
};

export {setInactivState};

