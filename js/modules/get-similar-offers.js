const getSimilarOffers = (offers) => {
  const offerTemplateFragment = document.querySelector('#card').content;
  const offerTemplate = offerTemplateFragment.querySelector('.popup');
  const offerFragment = document.createDocumentFragment();
  for (let i = 0; i < offers.length; i++) {
    const element = offerTemplate.cloneNode(true);
    const offerTitle = element.querySelector('.popup__title');
    offerTitle.textContent = offers[i].offer.title;
    const offerAddress = element.querySelector('.popup__text--address');
    offerAddress.textContent = offers[i].offer.address;
    const offerPrice = element.querySelector('.popup__text--price');
    offerPrice.textContent = `${offers[i].offer.price} ₽/ночь`;
    const offerType = element.querySelector('.popup__type');
    let offerTypeValue = '';
    switch(offers[i].offer.type) {
      case 'flat' :
        offerTypeValue = 'Квартира';
        break;
      case 'bungalow' :
        offerTypeValue ='Бунгало';
        break;
      case 'house' :
        offerTypeValue ='Дом';
        break;
      case 'palace' :
        offerTypeValue ='Дворец';
        break;
      case 'hotel' :
        offerTypeValue ='Отель';
        break;
      default :
        offerTypeValue = 'Неопознаное жилище троля';
    }
    offerType.textContent = offerTypeValue;
    const offerCapacity = element.querySelector('.popup__text--capacity');
    offerCapacity.textContent = `${offers[i].offer.rooms} комнаты для ${offers[i].offer.guests} гостей`;
    const offerTime = element.querySelector('.popup__text--time');
    offerTime.textContent = `Заезд после ${offers[i].offer.checkin}, выезд до ${offers[i].offer.checkout}`;
    const offerFeaturesContainer = element.querySelector('.popup__features');
    const offerFeatureList = offerFeaturesContainer.querySelectorAll('.popup__feature');
    offerFeatureList.forEach((feaatureListItem) => {
      const isNecessary = offers[i].offer.features.some( (offerFeature) => feaatureListItem.classList.contains(`popup__feature--${offerFeature}`));
      if(!isNecessary) {
        feaatureListItem.remove();
      }
    });
    const offerDescription = element.querySelector('.popup__description');
    if(offers[i].offer.description) {
      offerDescription.textContent = offers[i].offer.description;
    }
    const offerPhotos = element.querySelector('.popup__photos');
    const offerPhotoImageTemplate = offerPhotos.querySelector('img');
    offerPhotos.textContent = '';
    offers[i].offer.photos.forEach ((offerPhoto) => {
      const offerPhotoImage = offerPhotoImageTemplate.cloneNode(true);
      offerPhotoImage.src = offerPhoto;
      offerPhotos.appendChild(offerPhotoImage);
    });
    const authorAvatar = element.querySelector('.popup__avatar');
    if (offers[i].author.avatar) {
      authorAvatar.src = offers[i].author.avatar;
    }
    offerFragment.appendChild(element);
  }

  return offerFragment;
};

export {getSimilarOffers};
