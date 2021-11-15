const getSimilarOffer = (offer) => {
  const offerTemplateFragment = document.querySelector('#card').content;
  const offerTemplate = offerTemplateFragment.querySelector('.popup');
  // const offerFragment = document.createDocumentFragment();
  const element = offerTemplate.cloneNode(true);
  const offerTitle = element.querySelector('.popup__title');
  offerTitle.textContent = offer.offer.title;
  const offerAddress = element.querySelector('.popup__text--address');
  offerAddress.textContent = offer.offer.address;
  const offerPrice = element.querySelector('.popup__text--price');
  offerPrice.textContent = `${offer.offer.price} ₽/ночь`;
  const offerType = element.querySelector('.popup__type');
  let offerTypeValue = '';
  switch(offer.offer.type) {
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
  offerCapacity.textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  const offerTime = element.querySelector('.popup__text--time');
  offerTime.textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  const offerFeaturesContainer = element.querySelector('.popup__features');
  const offerFeatureList = offerFeaturesContainer.querySelectorAll('.popup__feature');
  offerFeatureList.forEach((feaatureListItem) => {
    if (!offer.offer.features) {
      offerFeaturesContainer.remove();
    } else {
      const isNecessary = offer.offer.features.some( (offerFeature) => feaatureListItem.classList.contains(`popup__feature--${offerFeature}`));
      if(!isNecessary) {
        feaatureListItem.remove();
      }
    }

  });
  const offerDescription = element.querySelector('.popup__description');
  if(offer.offer.description) {
    offerDescription.textContent = offer.offer.description;
  }
  const offerPhotos = element.querySelector('.popup__photos');
  const offerPhotoImageTemplate = offerPhotos.querySelector('img');
  offerPhotos.textContent = '';
  if(offer.offer.photos) {
    offer.offer.photos.forEach ((offerPhoto) => {
      const offerPhotoImage = offerPhotoImageTemplate.cloneNode(true);
      offerPhotoImage.src = offerPhoto;
      offerPhotos.appendChild(offerPhotoImage);
    });
  }

  const authorAvatar = element.querySelector('.popup__avatar');
  if (offer.author.avatar) {
    authorAvatar.src = offer.author.avatar;
  }
  // offerFragment.appendChild(element);

  // console.log(offerFragment);
  // return offerFragment;
  return element;
};

export {getSimilarOffer};
