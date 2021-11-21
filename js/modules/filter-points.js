const filterPoints = (point) => {
  const typeFilterItem = document.querySelector('#housing-type');
  const roomsFilterItem = document.querySelector('#housing-rooms');
  const guestsFilterItem = document.querySelector('#housing-guests');
  const priceFilterItem = document.querySelector('#housing-price');
  const wifiFilterItem = document.querySelector('#filter-wifi');
  const dishwasherFilterItem = document.querySelector('#filter-dishwasher');
  const parkingFilterItem = document.querySelector('#filter-parking');
  const washerFilterItem = document.querySelector('#filter-washer');
  const elevatorFilterItem = document.querySelector('#filter-elevator');
  const conditionerFilterItem = document.querySelector('#filter-conditioner');

  const filterByType = () => {
    if (typeFilterItem.value !== 'any') {
      return typeFilterItem.value === point.offer.type;
    } else {
      return true;
    }
  };
  const filterByRooms = () => {
    if (roomsFilterItem.value !== 'any') {
      return Number(roomsFilterItem.value) === Number(point.offer.rooms);
    } else {
      return true;
    }
  };
  const filterByGuests = () => {
    if (guestsFilterItem.value !== 'any') {
      return Number(guestsFilterItem.value) === Number(point.offer.guests);
    } else {
      return true;
    }
  };
  const filterByPrice = () => {
    switch(priceFilterItem.value) {
      case 'low':
        return point.offer.price < 10000;
      case 'middle':
        return point.offer.price >= 10000 && point.offer.price < 50000;
      case 'high':
        return point.offer.price >= 50000;
      default:
        return true;
    }
  };

  const filterByFeatures = (feature) => {

    if(!feature.checked || !point.offer.features) {
      return true;
    }
    return point.offer.features.includes(feature.value);
  };
  return filterByType() && filterByRooms() && filterByGuests() && filterByPrice() && filterByFeatures(wifiFilterItem) && filterByFeatures(dishwasherFilterItem) && filterByFeatures(parkingFilterItem) && filterByFeatures(washerFilterItem) && filterByFeatures(elevatorFilterItem) && filterByFeatures(conditionerFilterItem);
};

export {filterPoints};
