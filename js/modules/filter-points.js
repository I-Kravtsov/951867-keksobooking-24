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

  const filterType = () => {
    if (typeFilterItem.value !== 'any') {
      return typeFilterItem.value === point.offer.type;
    } else {
      return true;
    }
  };
  const filterRooms = () => {
    if (roomsFilterItem.value !== 'any') {
      return Number(roomsFilterItem.value) === Number(point.offer.rooms);
    } else {
      return true;
    }
  };
  const filterGuests = () => {
    if (guestsFilterItem.value !== 'any') {
      return Number(guestsFilterItem.value) === Number(point.offer.guests);
    } else {
      return true;
    }
  };
  const filterPrice = () => {
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
  const filterWifi = () => {

    if(!wifiFilterItem.checked || !point.offer.features) {
      return true;
    }
    return point.offer.features.includes(wifiFilterItem.value);
  };
  const filterDishwasher = () => {
    if(!dishwasherFilterItem.checked || !point.offer.features) {
      return true;
    }
    return point.offer.features.includes(dishwasherFilterItem.value);
  };
  const filterParking = () => {
    if(!parkingFilterItem.checked || !point.offer.features) {
      return true;
    }
    // console.log(point.offer.feincludes(wifiFilterItem.value));
    return point.offer.features.includes(parkingFilterItem.value);
  };
  const filterWasher = () => {
    if(!washerFilterItem.checked || !point.offer.features) {
      return true;
    }
    // console.log(point.offer.feincludes(wifiFilterItem.value));
    return point.offer.features.includes(washerFilterItem.value);
  };
  const filterElevator = () => {
    if(!elevatorFilterItem.checked || !point.offer.features) {
      return true;
    }
    // console.log(point.offer.feincludes(wifiFilterItem.value));
    return point.offer.features.includes(elevatorFilterItem.value);
  };
  const filterConditioner = () => {
    if(!conditionerFilterItem.checked || !point.offer.features) {
      return true;
    }
    // console.log(point.offer.feincludes(wifiFilterItem.value));
    return point.offer.features.includes(conditionerFilterItem.value);
  };
  return filterType() && filterRooms() && filterGuests() && filterPrice() && filterWifi() && filterDishwasher() && filterParking() && filterWasher() && filterElevator() && filterConditioner();
};

export {filterPoints};
